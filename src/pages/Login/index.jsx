import authApi from '@/api/authApi'
import Logo from '@/assets/img/logo.png'
import useAuth from '@/hooks/useAuth'
import { yupResolver } from '@hookform/resolvers/yup'
import { Button, TextField } from '@mui/material'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import * as yup from 'yup'

function LoginPage() {
    const [isLoading, setIsLoading] = useState(false)
    let navigate = useNavigate()
    const { setAuth } = useAuth()

    const schema = yup.object().shape({
        username: yup.string().required('Không được bỏ trống'),
        password: yup.string().required('Không được bỏ trống')
    })

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        mode: 'onChange',
        resolver: yupResolver(schema)
    })

    const onSubmit = async (data) => {
        setIsLoading(true)

        try {
            const response = await authApi.signIn(data)
            console.log(response.data.data[0])
            localStorage.setItem('fbm-user', JSON.stringify(response.data.data[0]))
            const username = JSON.parse(localStorage.getItem('fbm-user')).username
            const pwd = JSON.parse(localStorage.getItem('fbm-user')).pwd
            const roles = [JSON.parse(localStorage.getItem('fbm-user')).roles[0].authority]
            const accessToken = JSON.parse(localStorage.getItem('fbm-user')).token
            console.log(roles)

            setAuth({ username, pwd, roles, accessToken })
            setIsLoading(false)

            if (roles[0] === 'CUSTOMER') {
                navigate('/')
            } else {
                toast.error('Sai thông tin đăng nhập!')
            }
        } catch (error) {
            console.log(error)
            if (error.response.status === 401) {
                toast.error('Sai thông tin đăng nhập!')
                setIsLoading(false)
            }
        }
    }

    return (
        <div className="w-screen h-screen flex items-center justify-center bg-ming">
            <div className="bg-white w-[500px] p-10 flex flex-col gap-5 items-center rounded">
                <div className="font-bold flex flex-col gap-4 items-center justify-between w-full">
                    <img src={Logo} alt="logo" width="90px" />
                    <h1 className="text-xl">Đăng nhập</h1>
                </div>
                <div className="w-full">
                    <TextField
                        size="small"
                        label="Tài Khoản"
                        fullWidth
                        {...register('username')}
                        error={errors.username ? true : false}
                        helperText={errors.username?.message}
                    />
                </div>
                <div className="w-full">
                    <TextField
                        size="small"
                        label="Mật khẩu"
                        type="password"
                        fullWidth
                        {...register('password')}
                        error={errors.password ? true : false}
                        helperText={errors?.password?.message}
                    />
                </div>
                <div className="w-full text-center">
                    <div>
                        Bạn chưa có tài khoản?{' '}
                        <Link className="underline" to="/registor">
                            Đăng ký
                        </Link>
                    </div>
                </div>
                <div className="w-full">
                    <Button variant="contained" className="w-full" onClick={handleSubmit(onSubmit)}>
                        Đăng nhập
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default LoginPage
