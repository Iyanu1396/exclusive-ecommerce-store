function AccountForm() {
  return (
    <form className="mt-8 flex flex-col gap-4 bg-slate-50 px-6 py-7 rounded-sm shadow-xl sm:mt-0">
      <div className="sm:grid sm:grid-cols-2 sm:gap-4">
        <div className="flex flex-col gap-4 sm:gap-2">
          <label htmlFor="firstName">First Name</label>
          <input
            className="bg-[#F5F5F5] py-2 pl-2 font-mont font-medium outline-none placeholder:font-mont"
            autoCapitalize="first name"
            placeholder="Iyanuoluwa"
            id="firstName"
            type="text"
          />
        </div>

        <div className="mt-4 flex flex-col gap-4 sm:mt-0 sm:gap-2">
          <label htmlFor="lastName">Last Name</label>
          <input
            className="bg-[#F5F5F5] py-2 pl-2 font-mont font-medium outline-none placeholder:font-mont"
            autoComplete="last name"
            placeholder="Atijosan"
            id="lastName"
            type="text"
          />
        </div>
      </div>

      <div className="sm:grid sm:grid-cols-2 sm:gap-4">
        <div className="flex flex-col gap-2">
          <label htmlFor="email">Email</label>
          <input
            className="bg-[#F5F5F5] py-2 pl-2 font-mont font-medium outline-none placeholder:font-mont"
            autoComplete="email"
            placeholder="iyanu1396@gmail.com"
            id="email"
            type="email"
          />
        </div>

        <div className="mt-4 flex flex-col gap-2 sm:mt-0">
          <label htmlFor="address">Address</label>
          <input
            className="bg-[#F5F5F5] py-2 pl-2 font-mont font-medium outline-none placeholder:font-mont"
            autoComplete="address"
            placeholder="usa , new york"
            id="address"
            type="address"
          />
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <label htmlFor="currentPassword">Password Changes</label>
        <input
          className="bg-[#F5F5F5] py-2 pl-2 font-mont font-medium outline-none placeholder:font-mont"
          autoComplete="password"
          placeholder="Current Password"
          id="currentPassword"
          type="password"
        />
        <input
          className="bg-[#F5F5F5] py-2 pl-2 font-mont font-medium outline-none placeholder:font-mont"
          autoComplete="password"
          placeholder="New Password"
          id="newPassword"
          type="text"
        />

        <input
          className="bg-[#F5F5F5] py-2 pl-2 font-mont font-medium outline-none placeholder:font-mont"
          autoComplete="password"
          placeholder="Confirm New Password"
          id="confirmNewPassword"
          type="text"
        />
      </div>
    </form>
  );
}

export default AccountForm;
