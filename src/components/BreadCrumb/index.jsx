// function BreadCrumb() {
//     return ( <h1>BreadCrumb/home</h1> );
// }

// export default BreadCrumb;
import HomeIcon from '@mui/icons-material/Home'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import Chip from '@mui/material/Chip'
import { emphasize, styled } from '@mui/material/styles'
import { Link } from 'react-router-dom'

const StyledBreadcrumb = styled(Chip)(({ theme }) => {
    const backgroundColor =
        theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[800]
    return {
        backgroundColor,
        height: theme.spacing(3),
        color: theme.palette.text.primary,
        fontWeight: theme.typography.fontWeightRegular,
        '&:hover, &:focus': {
            backgroundColor: emphasize(backgroundColor, 0.06)
        },
        '&:active': {
            boxShadow: theme.shadows[1],
            backgroundColor: emphasize(backgroundColor, 0.12)
        }
    }
}) // TypeScript only: need a type cast here because https://github.com/Microsoft/TypeScript/issues/26591

export default function BreadCrumb({ routers }) {
    return (
        <div role="presentation" className="mt-3 mb-3">
            <Breadcrumbs aria-label="breadcrumb">
                <StyledBreadcrumb
                    component={Link}
                    to="/"
                    label="Trang chủ"
                    icon={<HomeIcon fontSize="small" />}
                />
                {routers?.map((i, index) => {
                    return (
                        <StyledBreadcrumb
                            key={index}
                            component={Link}
                            to={i.link}
                            label={i.label}
                            disabled={i.disabled}
                        />
                    )
                })}
            </Breadcrumbs>
        </div>
    )
}
