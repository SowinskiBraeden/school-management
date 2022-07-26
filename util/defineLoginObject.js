export default function defineLoginObject(accountType, id, password) {
  let loginObject = {password: password}
  if (accountType == 'student') loginObject.sid = id
  if (accountType == 'teacher') loginObject.tid = id
  if (accountType == 'admin') loginObject.aid = id
  return JSON.stringify(loginObject)
}