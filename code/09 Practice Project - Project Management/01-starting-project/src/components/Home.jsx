import img from '../assets/no-projects.png';

export default function Home(){
    return (
        <div className="mt-24 text-center w-2/3">
            <img src={img} alt="No projects" className="w-16 h-16 object-contain mx-auto" />
            <h2 className="text-xl font-bold text-stone-500 my-4">No projects found</h2>
            <p className="text-stone-500">Start by creating a new project.</p>
        </div>
    );
}