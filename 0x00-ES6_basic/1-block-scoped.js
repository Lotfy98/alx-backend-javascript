export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    const newTask = task;
    const newTask2 = task2;
  }

  return [task, task2];
}
