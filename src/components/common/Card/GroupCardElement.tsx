const Card = () => {
    return (
      
        <div className="col-span-2 h-100 w-100 shadow-default dark:border-strokedark dark:bg-boxdark md:px-6 2xl:px-7.5 relative">
          <a href="projects/1">
            <h3 className="p-3 text-title-md text-black-2">Научная группа 1</h3>
            <h4 className="p-2 text-title-sm2 text-black-2">Участники</h4>
            <ol className="p-3 text-sm text-black-2">
              <li>Участник 1</li>
              <li>Участник 2</li>
              <li>Участник 3</li>
            </ol>
            <p className="p-3 text-sm text-black-2">Руководитель: Иванов Иван Иванович</p>
            <p className="p-3 text-sm text-black-2">Последний проект: Проект 1</p>
            </a>
        </div>
    );
  };
  
  export default Card;