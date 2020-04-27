const params = '$select=id,businessPhones,displayName,givenName,jobTitle,mail,mobilePhone,officeLocation,preferredLanguage,surname,userPrincipalName&$expand=extensions'

export const fetchUser = async ({ token }) => {
  try {
    const res = await fetch(`${process.env.USERS}?${params}`, {
      headers: { 'Authorization': `Bearer ${token}` }
    })
    const user = await res.json()
    console.log(user)
    return user
  } catch(e) {
    console.log(e)
  }
}
