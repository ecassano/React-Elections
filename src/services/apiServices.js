import { getData } from './httpServices';

export async function apiGetAllCities() {
  const allCities = await getData('cities');
  return allCities;
}

export async function apiGetElectionInfo(param) {
  const election = await getData(`election?cityId=${param}`);
  return election;
}

export async function apiGetAllCandidates() {
  const candidates = await getData('candidates');
  return candidates;
}
