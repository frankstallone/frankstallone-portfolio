---
layout: ../../layouts/PostLayout.astro
date: 2019-06-04
title: "👨🏻‍💻 Biggest tech blunder in a decade"
desc: "What I learned from the biggest tech blunder in a decade."
hero: "/assets/posts/how-not-to-do-backup/logo-lines.png"
alt: "Lines in Affinity Designer from a logo mark by Frank Stallone III"
draft: false
---

<img class="breakout" src="/assets/posts/how-not-to-do-backup/logo-lines.png" alt="Lines in Affinity Designer from a logo mark by Frank Stallone III">

Recently I have been on working on a logo design for myself using my last name. I iterate on a sketch in my sketch book then bring it into the computer once I feel it's right. After years of working with Adobe products I have switched to [Affinity Designer](https://affinity.serif.com/en-us/). I enjoy it's layout and features. It seems to declutter my mind.

I also started working on this blog. I keep everything related to this blog and branding in the same folder. That folder [is on Dropbox](https://db.tt/dg8YH7YA) where it can be synced. That is a 'form' of backup but not a good one. I'll explain why later.

After a few iterations of the logo I was happy enough to test it out on some instagram stories. Ironically, the only reason I have anything left of that original design, is because of Instagram stories. Here's a story I did where I featured the logo at the bottom:

![Instagram Story Part 1](/assets/posts/how-not-to-do-backup/insta-01.png)
![Instagram Story Part 2](/assets/posts/how-not-to-do-backup/insta-02.png)

I was not incredibly happy with it, but I was happy about the progress. As I mentioned earlier I typically put all of my related material in the same Dropbox folder. A typical folder structure will look like this:

```
stallone.dev
└── assets
└── stallone.dev
```

That's two subfolders in a main folder. The one contains all the assets related to a file and the other is typcally the name of the repository I use like what would be found on Github. Well, as you can see, there's a problem.

That problem is something I have never really done before. I'm typically good at being pretty explicit about my folder names. I will call the main folder the domain name. So, inspectorseltzer.com is an example of another project name in my Dropbox folder. It just so happened I called my Git repo with my blog the same as the main folder. That's not a problem except for when you are looking to remove that git repository from your folder and you write in Terminal `rm -rf stallone.dev`.

Panic struck after more than a few seconds passed with Termianl not coming back. I immediately though, "Wait, I did delete the right folder, right?" This is not something I had thought in a long time, maybe even longer than a decade ago. That type of delete skips the Trash can which I barely use anyway. Sure enough, I deleted the entire folder including an untold amount of hours spent working on my logo.

Distressed I immediately realized it was a Dropbox folder and looked in the toolbar on OSX to see if it was running. It was not running. Great! How long was Dropbox not running?! I had it set to open at start up but sometimes I close it on battery so as not to eat my entire battery uploading files.

Long story short(er) after contacting Dropbox we came to the conclusion that the logo work I had started never was uploaded to Dropbox. To no fault of theirs, we turned back time which was destructive to other folders. This was it, my biggest tech blunder in a long long, long time. Although devistated for a short period of time, I realized I could redo it all.

The current iteration, I am more pleased with, although again it's not there yet. As for my folders? They are more specific now so I know before running `rm -rf` in Terminal on the wrong folder. Dropbox is running more consistently but it's not really a great backup solution. If you are on OSX [you should have Time Machine](https://support.apple.com/en-us/HT201250) setup with an external backup hard drive you connect to daily. This is made easier if you have a portable or desktop USB hub. I also suggest off-shore backup solutions like [Backblaze](https://www.backblaze.com/). That way in the unfortunate event of a robbery or fire, your data is safely backed up in another location.

![Instagram Story w/ latest logo design](/assets/posts/how-not-to-do-backup/insta-03.png)
