import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded'
import MailRoundedIcon from '@mui/icons-material/MailRounded'
import YouTubeIcon from '@mui/icons-material/YouTube'
function FloatContact() {
    return (
        <div className="fixed bottom-4 right-4 z-50 text-sm">
            <ul>
                <li className="bg-mistyrose rounded ">
                    <a href="#" className="flex gap-2 items-center mb-2 p-2">
                        <WhatsAppIcon className="text-facebook" />
                        <span className="font-bold">Zalo</span>
                    </a>
                </li>
                <li className="bg-mistyrose rounded ">
                    <a href="#" className="flex gap-2 items-center mb-2 p-2">
                        <FacebookRoundedIcon className="text-facebook" />
                        <span className="font-bold">Facebook</span>
                    </a>
                </li>
                <li className="bg-mistyrose rounded ">
                    <a href="#" className="flex gap-2 items-center mb-2 p-2">
                        <MailRoundedIcon className="text-ming" />
                        <span className="font-bold">Mail</span>
                    </a>
                </li>
                <li className="bg-mistyrose rounded ">
                    <a href="#" className="flex gap-2 items-center mb-2 p-2">
                        <YouTubeIcon className="text-youtube" />
                        <span className="font-bold">Youtube</span>
                    </a>
                </li>
                <li className="bg-mistyrose rounded ">
                    <a href="#" className="flex gap-2 items-center mb-2 p-2">
                        <span className="font-bold">Hotline: 0986.666.666</span>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default FloatContact
