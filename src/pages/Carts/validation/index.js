import yup from '@/utils/yupValidation'

const schema = yup.object().shape({
    province: yup.string().required('Không được để trống.'),
    district: yup.string().required('Không được để trống.'),
    ward: yup.string().required('Không được để trống.'),
    address: yup.string().required('Không được để trống.').trim(),
})
export default schema
