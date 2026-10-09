
const studentName = ' Ярик Никита';
const courseName = 'Основы веб-разработки';
let completedTasks = 6;
const totalTasks = 10;

const remainingTasks = totalTasks - completedTasks;
const progress = completedTasks / totalTasks * 100;

console.log('Студент: ${StudentName}');
console.log('Прогресс: ${progress}%');

if(completedTasks === totalTasks) {
    console.log("Спринт завершен");
} else {
    console.log('Продолжайте работу');
}