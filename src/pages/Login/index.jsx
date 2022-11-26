import Logo from '@/assets/img/logo.png'
import { yupResolver } from '@hookform/resolvers/yup'
import { Button, TextField } from '@mui/material'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import * as yup from 'yup'

function LoginPage() {
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

    const onSubmit = (data) => {
        console.log(data)
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
