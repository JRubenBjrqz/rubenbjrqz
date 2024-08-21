import { Container } from '@/components/ui/Container'
import { ImgAvatarAbout } from '@/components/ui/Avatar'

export default function About() {
    return (
        <>
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-12">
                    <div className="mx-auto">
                        <ImgAvatarAbout size="about"/>
                    </div>
                    <div className="mt-10 lg:mt-0 lg:order-first lg:row-span-2">
                        <h1 className="text-4xl text-pretty">
                            Rubén Bojórquez. Lorem ipsum dolor sit amet, consectetur.
                        </h1>
                        <div className="mt-6 text-base space-y-6">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam 
                                ultrices tortor nunc, quis maximus neque imperdiet quis. 
                            </p>
                            <p>
                                Praesent congue bibendum felis sodales egestas. Nulla commodo 
                                nec neque sed laoreet. Sed congue, augue scelerisque volutpat 
                                laoreet, nisi orci scelerisque mauris, a blandit urna lectus eu quam. 
                            </p>
                            <p>
                                Duis ac felis hendrerit, cursus magna non, posuere ex. Nam varius 
                                nisl sed eros aliquam, id sollicitudin tortor suscipit. Fusce interdum 
                                id velit eget facilisis. Cras ac neque id leo efficitur varius eget ut orci.
                            </p>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}