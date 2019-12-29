export function getNicksFromMemberList(memberList: string): string[] {
  return memberList
    .split("\n")
    .filter(value => {
      return value.indexOf("Ocupada") !== 15;
    })
    .map(value => {
      return value
        .substring(value.toLowerCase().indexOf("professor(a): "), value.indexOf(" -"))
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
        value.indexOf("Ocupada") !== 15 &&
        value.trim().toLowerCase() !== "professor(a):" &&
        value
          .trim()
          .toLowerCase()
          .startsWith("professor(a)")
      );
    })
    .map(value => {
      const [nick] = getNicksFromMemberList(value).filter(value => value !== undefined);
      return (
        value
          // Professor(a): .Explanado. - 07 Dez 2019 [GRA.I]
          .substring(14, value.indexOf(" ["))
          // .Explanado. - 07 Dez 2018 Professor(a):
          .substring(nick ? nick.length + 3 : 13)
      );
      // 07 Dez 2018
    });
}
