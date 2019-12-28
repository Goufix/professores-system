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
    })
    .filter(Boolean);
}

export function getJoinDate(memberList: string) {
  return memberList
    .split("\n")
    .filter(value => {
      return (
        value.indexOf("Ocupada") !== 15 || // It should remove a line that i don't wanna return
        value.trim().toLowerCase() === "Professor(a): " // It should remove empty info of the list
      );
    })
    .map(value => {
      console.log(value); // but in this log, empty info still in the array
      const [nick] = getNicksFromMemberList(value).filter(
        value => value !== undefined
      );
      return value
        .substring(14, value.indexOf(" ["))
        .substring(nick ? nick.length + 3 : 13);
      // Professor(a): .Explanado. - 07 Dez 2019 [GRA.I]
      // .Explanado. - 07 Dez 2018 Professor(a):

      // 07 Dez 2018
    });
}
