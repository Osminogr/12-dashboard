const Card = () => {
    return (
      
        <div className="col-span-2 h-100 w-100 shadow-default dark:border-strokedark dark:bg-boxdark md:px-6 2xl:px-7.5 relative">
          <a href="projects/1">
            <h3 className="p-3 text-title-md text-black-2">Проект 1</h3>
            <h4 className="p-2 text-title-sm2 text-black-2">Авторы</h4>
            <ol className="p-3 text-sm text-black-2">
              <li>Автор 1</li>
              <li>Автор 2</li>
              <li>Автор 3</li>
            </ol>
            <p className="p-3 text-sm text-black-2">Описание проекта</p>
            <p className="p-3 text-sm text-black-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum aliquid excepturi blanditiis pariatur molestias velit ipsa tenetur! Aspernatur ad voluptatum provident rerum voluptas consequatur repudiandae voluptatibus! Laborum adipisci libero non.</p>
            </a>
        </div>
    );
  };
  
  export default Card;