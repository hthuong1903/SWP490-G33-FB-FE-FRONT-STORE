import { Avatar, Button } from '@mui/material'
import { Container } from '@mui/system'

function Feature() {
    return (
        <Container className="py-14">
            <div className="flex gap-10 justify-between">
                <div className="flex flex-col items-center p-4 rounded cursor-pointer transition ease-in-out hover:scale-110 hover:bg-white hover:drop-shadow-lg select-none">
                    <Avatar className="w-40 h-40" src="https://source.unsplash.com/random" />
                    <div className="text-xl font-bold my-3">Le Anh Tuan</div>
                    <p className="text-center">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum illum quaerat
                        maxime. Earum sint reprehenderit omnis asperiores deserunt cum
                    </p>
                </div>
                <div className="flex flex-col items-center p-4 rounded cursor-pointer transition ease-in-out hover:scale-110 hover:bg-blue-300 hover:drop-shadow-lg select-none">
                    <Avatar className="w-40 h-40" src="https://source.unsplash.com/random" />
                    <div className="text-xl font-bold my-3">Le Anh Tuan</div>
                    <p className="text-center">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum illum quaerat
                        maxime. Earum sint reprehenderit omnis asperiores deserunt cum
                    </p>
                </div>
                <div className="flex flex-col items-center p-4 rounded cursor-pointer transition ease-in-out hover:scale-110 hover:bg-blue-300 hover:drop-shadow-lg select-none">
                    <Avatar className="w-40 h-40" src="https://source.unsplash.com/random" />
                    <div className="text-xl font-bold my-3">Le Anh Tuan</div>
                    <p className="text-center">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum illum quaerat
                        maxime. Earum sint reprehenderit omnis asperiores deserunt cum
                    </p>
                </div>
                <div className="flex flex-col items-center p-4 rounded cursor-pointer transition ease-in-out hover:scale-110 hover:bg-blue-300 hover:drop-shadow-lg select-none">
                    <Avatar className="w-40 h-40" src="https://source.unsplash.com/random" />
                    <div className="text-xl font-bold my-3">Le Anh Tuan</div>
                    <p className="text-center">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum illum quaerat
                        maxime. Earum sint reprehenderit omnis asperiores deserunt cum
                    </p>
                </div>
            </div>
            <div className="bg-gray-200 p-4 mt-14 flex items-center">
                <p>
                    <b>Lorem ipsum</b> dolor sit amet consectetur adipisicing elit. Aliquid,
                    voluptas quo? Fuga rem natus architecto neque autem officia quis impedit ex,
                    eligendi mollitia aliquid et veniam aut cumque molestiae nam! Ipsa a deserunt
                    nesciunt repellat quod commodi aperiam id impedit libero, eligendi voluptatibus
                    iste, atque aut! Dignissimos adipisci ea laborum consequuntur maiores incidunt,
                    hic voluptate accusamus molestias dolor
                </p>
                <div className="flex-initial w-96">
                    <Button className="transition ease-in-out underline hover:scale-110">
                        Giới thiệu
                    </Button>
                </div>
            </div>
        </Container>
    )
}

export default Feature
