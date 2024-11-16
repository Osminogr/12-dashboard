import { ProjectPrewiew } from "@/types/project_preview";

interface Props {
    project_data: ProjectPrewiew
}



const Card = ({project_data}: Props) => {
    return (
      
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl  w-full p-8 transition-all duration-300 animate-fade-in col-span-4">
      <div className="flex flex-col md:flex-row">
          <div className="md:w-1/3 text-center mb-8 md:mb-0">
              <img src={project_data.image} alt="Profile Picture" className="rounded-full w-48 h-48 mx-auto mb-4 border-4 border-indigo-800 dark:border-blue-900 transition-transform duration-300 hover:scale-105"/>
              <h1 className="text-2xl font-bold text-indigo-800 dark:text-white mb-2">{project_data.name}</h1>
              <p className="text-gray-600 dark:text-gray-300">Исследовательский проект</p>
              <a href="/projects/1"><button className="mt-4 bg-indigo-800 text-white px-4 py-2 rounded-lg hover:bg-blue-900 transition-colors duration-300">Страница проекта</button></a>
          </div>
          <div className="md:w-2/3 md:pl-8">
              <h2 className="text-xl font-semibold text-indigo-800 dark:text-white mb-4">Описание</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                  {project_data.description}
              </p>
              <h2 className="text-xl font-semibold text-indigo-800 dark:text-white mb-4">Теги</h2>
              <div className="flex flex-wrap gap-2 mb-6">
                  {project_data.tags.map((tag, index) => (
                    <span key={index} className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">{tag}</span>
                  ))}

              </div>
              <h2 className="text-xl font-semibold text-indigo-800 dark:text-white mb-4">Авторы</h2>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">


                    {project_data.authors.map((author, index) => (
                        <li key={index} className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-indigo-800 dark:text-blue-900" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
                            </svg>
                            {author.name}
                        </li>
                        ))}
              </ul>
          </div>
      </div>
  </div>
    );
  };
  
  export default Card;