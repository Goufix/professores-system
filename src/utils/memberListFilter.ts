export function memberListFilter(memberList: string) {
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
