function nonExistentFunc(){
  try {
    zzzzzzzzzzz();
  } catch (e) {
    document.write("The error was:" + e);
  }
}

nonExistentFunc();
