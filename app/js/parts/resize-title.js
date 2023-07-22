window.addEventListener("load", function () {
  resizeToFit.init([
      ".page-title__text"
  ]);

  function debounce(func, ms, now) { // объявляем функцию debounce

    let onLast // переменная отвечает за вызов функции func после того, как прошло время ожидания ms от последнего события движения курсора

    return function() { // эта функция запускается при каждом событии движения курсора

      const context = this // запоминаем передаваемую функцию func
      const args = arguments // запоминаем параметры передаваемой функции func

      const onFirst = now && !onLast // если хотим запустить функцию func при первом событии движения курсора и время ожидания не установлено

      clearTimeout(onLast) // сбрасываем время ожидания ms

      onLast = setTimeout(() => { // устанавливаем время ожидания

        onLast = null // очищаем переменную onLast
        if (!now) func.apply(context, args) // если при первом событии движения курсора функция func не была вызвана, то вызываем ее когда время ожидания ms закончилось

      }, ms) // подставляем значение параметра ms

      if (onFirst) func.apply(context, args) // запускаем функцию func при первом событии движения курсора

    }
  }


  window.addEventListener("resize", debounce(()=> {
  resizeToFit.resize();
}, 200));
});


