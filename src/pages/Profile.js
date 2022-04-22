import React from "react";
import AccountListing from "../components/Profile/AccountListing";
import SuccessfullClaim from "../components/Profile/SuccessfullClaim";
import UserInfor from "../components/Profile/UserInfor";

const Profile = () => {
	return (
		<div>
			<UserInfor />
			<div className="flex flex-wrap">
				<AccountListing />
				<SuccessfullClaim />
			</div>
		</div>
	);
}

export default Profile;