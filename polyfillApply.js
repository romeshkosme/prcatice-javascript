const profile = {
  firstName: "Romesh",
  hometown: "Raipur",
};

function getProfile(landmark) {
  console.log(
    `I'm ${this.firstName} from ${this.hometown}, near ${landmark[0]}`
  );
}

// Function.prototype.myApplyOne = function (context, args) {
//   context._this = this;
//   return context._this(args);
// };

// getProfile.myApplyOne(profile, ["mmmmmm"]);

Function.prototype.myApply = function(context, args) {
  context._this = this;
  return context._this(args)
}
getProfile.myApply(profile, ["CP"])