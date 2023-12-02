+++
title = 'Git Advanced Skill Git Rebase'
date = 2023-12-02T22:27:56+07:00
+++

## Overview and Required Knowledge

I have been working with Git for a while. As a developer, version control is one of the key daily workflows. However, git rebase is always something that I have heard of it, but never get a chance to deeply understand and applied in my daily working. In this post, I am going to explore git rebase, and summary how to use it.

Required Knowledge:
Git Basic Understanding

Audience who may get most out of this post:

- Have been working with Git for a while
- Haven't use/know git rebase in details

## Introduction to Git Rebase

**Git Rebase**

## When shouldn't use Rebase and when should use Rebase

#### Never Rebase on Shared Branch

**Git Rebase** will rewrite part of branch history. If those commits are already on origin, and someone rebase those commits and push to origin, other people who are on the same branch will have diverged. It is going to be super confused, and other people may lose their commits / codes when try to solve the diverge.

![Git Reverse Not Use 1](http://acerzhou.info/Blog/images/git-advanced-skill-git-rebase/git-rebase-start.png)
![Git Reverse Not Use 2](http://acerzhou.info/Blog/images/git-advanced-skill-git-rebase/git-rebase-deva.png)
![Git Reverse Not Use 3](http://acerzhou.info/Blog/images/git-advanced-skill-git-rebase/git-rebase-devb.png)

#### Best Rebase time - before push to origin

One of the best times to use **Git Rebase** is doing rebase just before push anything into origin. If we treat anything origin should be seriously correct and it is the final source of truth. Before pushing to origin, we need to make sure what push into origin should be correct and right formatted. Git Rebase is a good tool to use that time.

![Git Reverse Should Use 1](http://acerzhou.info/Blog/images/git-advanced-skill-git-rebase/git-rebase-should-use-start.png)
![Git Reverse Should Use 2](http://acerzhou.info/Blog/images/git-advanced-skill-git-rebase/git-rebase-should-use-end.png)

In this case, there are four commits (c6, c7, c8, c9).
c6 adds two files (file1 & file2).
c7 does an update on file1.
c8 revert the code change of c7.
c9 remove the file2.

Those four commits at the end, only add file1 into the repos. We would like to have more clear and simple history record in the whole repo history. So we can use **Git Rebase** to change the history to 1 commit (add file1). And push the origin.

## How to use Rebase

When use **Git Rebase**, there is always a base branch.

If a branch (e.g. feature/test) has an origin (origin/feature/test), when run command

```
    git rebase [-i]
```

the branch will base on origin branch.

Otherwise, you can use

```
    git rebase <branch-name> [-i]
```

to rebase again certain branch.

#### -i Parameter

-i means "interactive" rebase, that developer can edit before the rebase start, and control the behaviour. Without "-i" parameter, Git will apply rebase automatically, and get human interaction when it is necessary (getting into some troubles 😁).

When running **git rebase -i** will have following page shows

```
pick 4ad9704 hello
pick xxxxxxx commit 2
pick xxxxxxy commit 3

# Rebase 8d7e9b7..4ad9704 onto 8d7e9b7 (1 command)
#
# Commands:
# p, pick = use commit
# r, reword = use commit, but edit the commit message
# e, edit = use commit, but stop for amending
# s, squash = use commit, but meld into previous commit
# f, fixup = like "squash", but discard this commit's log message
# x, exec = run command (the rest of the line) using shell
# d, drop = remove commit
#
# These lines can be re-ordered; they are executed from top to bottom.
#
# If you remove a line here THAT COMMIT WILL BE LOST.
#
# However, if you remove everything, the rebase will be aborted.
#
# Note that empty commits are commented out
```

In this part, you can choose behaviour of **git rebase**.
Using editor, change the **pick** at the beginning of each commit, and choose the action for the commit.

- p(pick) - it will keep the commit as original - do this when you are happy with the commit
- r(reword) - when git rebase apply to this commit, it will give you opportunity to update commit message - do this when you are ok with the commit file change, but want to make better commit message
- e(edit) - when git rebase apply to this commit, it will give you opportunity to amend commit (either message or commit content) - do this when you want to do some update on the commit (require know how to do amend)
- s(squash) - the commit will be combined into previous one, and message will be put into previous commit message - do this when you want to combined two or more commits
- f(fixup) - similar to "s", but the commit message of this commit will be discard - do this when you want to remove the give message for this one
- x(exec) - run some shell script - I haven't play this one, may update this later
- d(drop) - remove the commit (same to remove the line)

Note: the order can be changed as well. Then rebase will apply it from to top. If there is any change or conflicts, it will stop and ask developers input to progress.

#### Example

Take the previous example:

```
c6 adds two files (file1 & file2).
c7 does an update on file1.
c8 revert the code change of c7.
c9 remove the file2.
```

I can do

```
r c6 adds two files (file1 & file2).
d c7 does an update on file1.
d c8 revert the code change of c7.
f c9 remove the file2.
```

When c6 is applied, I can reword commit message to "Add file1"

This will give a clean git history.

## How to practice

I will recommand to practice this skill by creating an empty repo. Then create a file, and commit some content, writing couple of more commits, and play with rebase. It is going to be helpful to see the simple change, and ordered commits. In real environment, it is could be more complex, but hard to see how rebase working.

## Summary

This post summarised some understanding on **Git Rebase**. I haven't covered **Git Rebase --onto**, maybe will cover it in future post. Hope everyone can get some understanding on this process. Please leave any comments and thoughts. Thanks for reading.

## Reference

[Atlassian Git Rebase](https://www.atlassian.com/git/tutorials/rewriting-history/git-rebase)
[Git Merge vs Git Rebase](https://medium.com/@lovepreet013singhhundal/git-merge-vs-git-rebase-d386e1f3cda7)
[Git Books](https://git-scm.com/docs/git-rebase)
[Git Rebasing](https://blog.scottlogic.com/2020/01/09/git-rebasing.html)
[Git Rebase and Git Rebase --onto](https://medium.com/@gabriellamedas/git-rebase-and-git-rebase-onto-a6a3f83f9cce)
