const data = require("/src/data.json");

const changeNumbers = function (a, b, c, d, e, f, g, h, i, j, k, l) {
  const $ = document;
  $.getElementById("work-hours").innerHTML = a;
  $.getElementById("work-hours-prev").innerHTML = b;
  $.getElementById("play-hours").innerHTML = c;
  $.getElementById("play-hours-prev").innerHTML = d;
  $.getElementById("study-hours").innerHTML = e;
  $.getElementById("study-hours-prev").innerHTML = f;
  $.getElementById("exercise-hours").innerHTML = g;
  $.getElementById("exercise-hours-prev").innerHTML = h;
  $.getElementById("social-hours").innerHTML = i;
  $.getElementById("social-hours-prev").innerHTML = j;
  $.getElementById("self-hours").innerHTML = k;
  $.getElementById("self-hours-prev").innerHTML = l;
};

const elements = document.getElementsByClassName("sidebar");

Array.from(elements).forEach(function (element) {
  const [work, play, study, exercise, social, self] = data;
  return element.addEventListener("click", function () {
    const elem = element.id;
    if (elem === "daily") {
      const work1 = work.timeframes.daily.current;
      const work2 = work.timeframes.daily.previous;
      const play1 = play.timeframes.daily.current;
      const play2 = play.timeframes.daily.previous;
      const study1 = study.timeframes.daily.current;
      const study2 = study.timeframes.daily.previous;
      const exercise1 = exercise.timeframes.daily.current;
      const exercise2 = exercise.timeframes.daily.previous;
      const social1 = social.timeframes.daily.current;
      const social2 = social.timeframes.daily.previous;
      const self1 = self.timeframes.daily.current;
      const self2 = self.timeframes.daily.previous;
      changeNumbers(
        work1,
        work2,
        play1,
        play2,
        study1,
        study2,
        exercise1,
        exercise2,
        social1,
        social2,
        self1,
        self2
      );
      document
        .getElementById(elem)
        .setAttribute("class", "sidebar filter-active");
      document.getElementById("weekly").setAttribute("class", "sidebar filter");
      document
        .getElementById("monthly")
        .setAttribute("class", "sidebar filter");
    } else if (elem === "weekly") {
      const work1 = work.timeframes.weekly.current;
      const work2 = work.timeframes.weekly.previous;
      const play1 = play.timeframes.weekly.current;
      const play2 = play.timeframes.weekly.previous;
      const study1 = study.timeframes.weekly.current;
      const study2 = study.timeframes.weekly.previous;
      const exercise1 = exercise.timeframes.weekly.current;
      const exercise2 = exercise.timeframes.weekly.previous;
      const social1 = social.timeframes.weekly.current;
      const social2 = social.timeframes.weekly.previous;
      const self1 = self.timeframes.weekly.current;
      const self2 = self.timeframes.weekly.previous;
      changeNumbers(
        work1,
        work2,
        play1,
        play2,
        study1,
        study2,
        exercise1,
        exercise2,
        social1,
        social2,
        self1,
        self2
      );
      document
        .getElementById(elem)
        .setAttribute("class", "sidebar filter-active");
      document.getElementById("daily").setAttribute("class", "sidebar filter");
      document
        .getElementById("monthly")
        .setAttribute("class", "sidebar filter");
    } else if (elem === "monthly") {
      const work1 = work.timeframes.monthly.current;
      const work2 = work.timeframes.monthly.previous;
      const play1 = play.timeframes.monthly.current;
      const play2 = play.timeframes.monthly.previous;
      const study1 = study.timeframes.monthly.current;
      const study2 = study.timeframes.monthly.previous;
      const exercise1 = exercise.timeframes.monthly.current;
      const exercise2 = exercise.timeframes.monthly.previous;
      const social1 = social.timeframes.monthly.current;
      const social2 = social.timeframes.monthly.previous;
      const self1 = self.timeframes.monthly.current;
      const self2 = self.timeframes.monthly.previous;
      changeNumbers(
        work1,
        work2,
        play1,
        play2,
        study1,
        study2,
        exercise1,
        exercise2,
        social1,
        social2,
        self1,
        self2
      );
      document
        .getElementById(elem)
        .setAttribute("class", "sidebar filter-active");
      document.getElementById("daily").setAttribute("class", "sidebar filter");
      document.getElementById("weekly").setAttribute("class", "sidebar filter");
    } else {
      console.log("error");
    }
  });
});
