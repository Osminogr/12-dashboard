const Card = () => {
    return (
      
        <div className="col-span-2 h-100 w-100 shadow-default dark:border-strokedark dark:bg-boxdark md:px-6 2xl:px-7.5 relative text-black-2">
          <a href="projects/1">
            <h3 className="p-3 text-title-md  dark:text-white">Научная группа 1</h3>
            <h4 className="p-2 text-title-sm2 dark:text-white">Участники</h4>
            <ol className="p-3 text-sm dark:text-white">
              <li>Участник 1</li>
              <li>Участник 2</li>
              <li>Участник 3</li>
            </ol>
            <p className="p-3 text-sm dark:text-white">Руководитель: Иванов Иван Иванович</p>
            <p className="p-3 text-sm dark:text-white">Последний проект: Проект 1</p>
            </a>
        </div>
    );
  };
  
  export default Card;