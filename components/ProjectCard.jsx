import React from 'react';

import { Card, CardHeader } from './ui/card';
import Image from 'next/image';
import { Badge } from './ui/badge';
import { Group, Link2Icon } from 'lucide-react';
import Link from 'next/link';

const ProjectCard = ({ project }) => {
	return (
        <Card className='group overflow-hidden relative w-full'>
        <CardHeader className='p-0'>
            {/* Image */}
            <div className='relative w-full h-[290px] flex justify-center items-center dark:bg-secondary/40 xl:bg-[100%] xl:bg-no-repeat overflow-hidden'>
                <Image
                src={project.image}
                width={440}
                height={280}
                alt=''          
                className='w-full h-full object-cover object-center-top absolute top-0 shadow-2xl hover:scale-110 transition-all'
                />
                {/* Link Button */}
                <div className='flex gap-x-4'>
                    <Link
                    href={project.link}
                    className='bg-secondary w-[55px] h-[55px] flex justify-center items-center rounded-full scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-50 duration-200 transition-all'
                    >
                        <Link2Icon />
                    </Link>
                    <Link
                    href={project.link}
                    className='bg-secondary w-[55px] h-[55px] flex justify-center items-center rounded-full scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-50 duration-200 transition-all'
                    >
                        <Group />
                    </Link>
                </div>
            </div>
        </CardHeader>
        <div className='h-full px-8 py-6'>
            <Badge className='uppercase text-sm font-medium mb-2 absolute top-4 left-5'>
                {project.category}
            </Badge>
            <strong className='h4 mbs-1 block'>{project.date}</strong>
            <p className='text-muted-foreground text-lg'>{project.description}</p>
        </div>
        </Card>
    );
};

export default ProjectCard;
