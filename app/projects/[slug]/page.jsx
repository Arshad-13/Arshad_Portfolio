import { experiences } from '@/app/data/portfolio';
import ProjectDetail from '@/app/components/ProjectDetail';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
    return experiences.map((project) => ({
        slug: project.slug,
    }));
}

export default async function Page({ params }) {
    const { slug } = await params;
    const project = experiences.find(p => p.slug === slug);

    if (!project) {
        notFound();
    }

    return <ProjectDetail project={project} />;
}
