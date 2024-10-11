import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import PROJECTS from "@/data/projects";
import { Project } from "@/interfaces/project";
import Autoplay from "embla-carousel-autoplay";
import React, { useEffect, useState } from "react";

const Slide = () => {
    const plugin = React.useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));
    const [data, setData] = useState<Project[] | null>(null);

    useEffect(() => {
        setData(PROJECTS);
    }, []);

    return (
        <Carousel
            plugins={[plugin.current]}
            className="w-full max-w-xl"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
        >
            <CarouselContent>
                {data?.map(project => (
                    <CarouselItem key={project.id}>
                        <div className="p-1">
                            <Card className=" bg-black text-white border-slate-600">
                                <CardContent className="flex flex-col aspect-square items-center justify-center p-8 gap-8">
                                    <h1 className="text-3xl font-medium">{project.name}</h1>
                                    <img
                                        src={project.photo}
                                        alt={project.name}
                                        className="rounded-md max-w-lg"
                                    />
                                    <div className="flex w-full justify-center items-center gap-8">
                                        <a
                                            href={project.linkCode}
                                            target="_blank"
                                        >
                                            <button className="rounded-md w-28 h-10 bg-lime-900 hover:bg-slate-600">
                                                Código
                                            </button>
                                        </a>
                                        <a
                                            href={project.linkSite}
                                            target="_blank"
                                        >
                                            <button className={project.linkSite ? `rounded-md w-28 h-10 bg-lime-900 hover:bg-slate-600` : `rounded-md w-28 h-10 bg-slate-600`} disabled={!project.linkSite}>
                                                Site
                                            </button>
                                        </a>
                                    </div>
                                    <div className="flex flex-wrap justify-center gap-4 mt-8">
                                        {project.stack.map((stack, index) => (
                                            <img
                                                key={index}
                                                src={stack}
                                                alt={project.name}
                                            />
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious className=" bg-black text-white border-slate-600" />
            <CarouselNext className=" bg-black text-white border-slate-600" />
        </Carousel>
    );
};

export default Slide;
