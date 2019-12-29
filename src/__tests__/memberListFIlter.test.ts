import { getNicksFromMemberList, getJoinDate } from "../utils/memberListFilter";

const memberList = `Professor(a): [Ocupada - DarkHabbo-1985]
Professor(a): yasmimksbru - 30 Nov 2019 [GRA.I]
Professor(a): Perseu.Ban - 02 Dez 2019 [GRA.I]
Professor(a): Sinistrando - 04 Dez 2019 [GRA.I] {G.DCP} 
Professor(a): rodr1guess - 05 Dez 2019 [GRA.I]
Professor(a): .Explanado. - 07 Dez 2019 [GRA.I]
Professor(a):
Professor(a):
daskjdghdkhasjlkdsa


`;

test("It should return only the username", () => {
  expect(getNicksFromMemberList(memberList)).toStrictEqual([
    "yasmimksbru",
    "perseu.ban",
    "sinistrando",
    "rodr1guess",
    ".explanado."
  ]);
});

test("It should return the join date of the users", () => {
  expect(getJoinDate(memberList)).toStrictEqual([
    "30 Nov 2019",
    "02 Dez 2019",
    "04 Dez 2019",
    "05 Dez 2019",
    "07 Dez 2019"
  ]);
});
