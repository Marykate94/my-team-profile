// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

class Engineer {
    constructor(github, email){
        this.github = 'GitHubUser';
        this.email = email;
    }
    getRole() {
        return 'Engineer'
    }
    getGithub() {
        return this.github;
    }
}

module.exports = Engineer;