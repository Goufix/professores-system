export function getNicksFromMemberList(memberList: string): string[] {
  return memberList
    .split("\n")
    .filter(value => {
      return value.indexOf("Ocupada") !== 15;
    })
    .map(value => {
      // It should get only the member
      return value
        .substring(
          value.toLowerCase().indexOf("professor(a): "),
          value.indexOf(" -")
        )
        .toLowerCase()
        .replace("professor(a): ", "");
    });
}

export function getJoinDate(nick: string) {
  return nick
    .split("\n")
    .filter(value => {
      return value.indexOf("Ocupada") !== 15;
    })
    .map(value => {
      // ?x:Andrey:x? - 23 Nov 2017 [
      /*  new Date().toLocaleDateString('pt-BR', {
            day: 'numeric', month: 'short', year: 'numeric'
          }).replace(/ de /g, " ");
      */

      return value
        .substring(value.indexOf(nick), value.indexOf(" ["))
        .substring(nick.length + 3);
    });
}
