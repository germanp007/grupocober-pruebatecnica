const FechaActual = () => {
  /* Segunda Task. Decidi colocar la fecha en un componente aparte para mas orden en el codigo*/

  const fechaActual = () => {
    /* Arrow Function para definir la fecha en curso*/

    /* Definimos el objeto fecha junto con dos arrays de dias y meses*/
    const currentDate = new Date();

    const days = [
      "Domingo",
      "Lunes",
      "Martes",
      "Miercoles",
      "Jueves",
      "Viernes",
      "Sabado",
    ];
    const months = [
      "Enero",
      "Febrero",
      "Marzo",
      "Abril",
      "Mayo",
      "Junio",
      "Julio",
      "Agosto",
      "Septiembre",
      "Octubre",
      "Noviembre",
      "Diciembre",
    ];

    /********************************************************************/
    /* Optenemos el dia en string consiguiendo el Indice del Array days en conjunto con el metodo getDay*/
    const dayOfWeek = days[currentDate.getDay()];
    /* Optenemos el dia del mes en number consiguiendo con el metodo getDate*/
    const dayOfMonth = currentDate.getDate();
    /* Optenemos el mes en string consiguiendo el Indice del Array months en conjunto con el metodo getMonth*/
    const month = months[currentDate.getMonth()];
    /* Optenemos el año en number consiguiendo con el metodo getFullYear */
    const year = currentDate.getFullYear();
    return `${dayOfWeek}, ${dayOfMonth} de ${month} de ${year}`;
  };
  return <p className="ui-text-intro">{fechaActual()}</p>;
};

export default FechaActual;
