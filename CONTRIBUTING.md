# Contributing to commIT-design

## How to contribute

In this project, we are heavily utilising GitHub features to document and signal any progress in the website development.

### Finding or creating issues

Most contributions start from defining issues. Anyone can open an issue for discussion. You can head to [this link](https://guides.github.com/features/issues/) for deep understanding about Issues. Specifically, you can start finding several Issues in [our Issues tab](https://github.com/nussucommit/commIT-design/issues). There are only two categories in Issues section, Open and Closed.

#### Open Issues

Open Issues are issues that need more attention and need to be resolved. Contributors should pick any of the Open Issues and start working on them.

#### Closed Issues

Closed Issues are issues that have been completed or doesn't need further action. Closed issues can be reopened if contributors find any issues related to it sometime in the future.

Please pay attention on every issue attribute. Every issue might be referenced by other contributors through [Linked Pull Requests](https://docs.github.com/en/issues/tracking-your-work-with-issues/linking-a-pull-request-to-an-issue). If an issue has a linked pull request, that means the issue is currently being handled. To avoid working on the same issue, contributors were strongly encouraged to submit a [draft pull request](https://github.blog/2019-02-14-introducing-draft-pull-requests/) first when they start working on an issue.

### Working on issues

#### Getting ready

Before working on an issue, please make sure to:

1. Check any open [pull requests](https://github.com/nussucommit/commIT-design/pulls) that no one is working on the issue.
2. Create a new branch from the `main` branch.

#### Creating a Pull Request

Steps to creating a Pull Request:

1. Commit and push your new changes into your branch
2. Head over to the Pull requests section on our repo, click New pull request
3. Pick your branch that you made changes in
4. Put a clear title and description in your pull request. Make sure the
   description follows our guide below
5. Pick Create pull request and hit the green button
6. You can mark your Pull Request as Draft Pull Request if it's not done yet, and later mark it as Ready for review after you commit all of the changes
7. Wait for us to review your changes
8. (optionally) Make the proposed changes
9. Merge the Pull Request once any of us approve it

#### Formatting Pull Request Description

To properly [link a pull request to an issue](https://docs.github.com/en/issues/tracking-your-work-with-issues/linking-a-pull-request-to-an-issue), there is one tiny requirement text to put in a Pull Request description.
Please make sure to mention the issue that you're working on correctly. Replace
this text `<!-- mention the issue that you're trying to close with this PR -->`
from the template with the issue number. Example:

```markdown
Closes #318

## Description

Update **`Start working on Issues`** section with clearer instructions on getting ready to work on an issue.
```
