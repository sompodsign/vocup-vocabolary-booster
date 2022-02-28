import {MDBContainer} from "mdb-react-ui-kit";
import "../styles/tutorialsStyle.css"

import parse from "html-react-parser";

export function PostDetail() {
    return (
        <>
        <div className="position-absolute top-16 end-0 w-full p-10 -z-10"
             style={{background: "#14C07B"}}>
            <MDBContainer>
                <div className="d-flex flex-column align-items-center">
                    <h1 style={{color: "white", fontSize: "40px"}}><b>Rsync: How To Use Rsync to Sync Local and Remote
                        Directories</b></h1>
                </div>
            </MDBContainer>
        </div>


                        {/**/}


                        <div className="mt-44">

                            <div className="row">
                                <div className="col">
                                    <h1>
                                        Backup with rsync on Windows (WSL)

                                    </h1>
                                </div>
                            </div>
                            <div className="row my-4">
                                <div className="col-md-9 left_body">

                                    <p className="lead pb-4 font-italic">rsync is a great backup tool, maybe the best.
                                        Learn how to use it in Windows, on a debian machine running with Windows
                                        Subsystem for Linux (WSL)</p>


                                    <div className="container mb-4 pl-0">

                                        <h2>
                                            About this post
                                        </h2>
                                        <p style={{textAlign: "center"}}>
                                            <em>
                                                Accept reality and have a backup plan
                                            </em>
                                            - Miley Cyrus
                                        </p>
                                        <p>
                                            I can't count how many times I've lost files because I was too lazy to set
                                            up a proper backup. And every time, I told myself that this would not happen
                                            ever again.
                                        </p>
                                        <p>
                                            At some point, I found the solution for macs and Linux computers:
                                            <a href="https://en.wikipedia.org/wiki/Rsync">
                                                rsync
                                            </a>
                                            , a tool that can synchronize the contents of two directories.
                                        </p>
                                        <p>
                                            If you're here, it's because you're desperately looking for a solution to
                                            run rsync on windows, so you probably know already that rsync is:
                                        </p>
                                        <ul>
                                            <li>
                                                <strong>
                                                    efficient
                                                </strong>
                                                : it uses the size and modification times of the files to decide which
                                                files need to be transferred.
                                            </li>
                                            <li>
                                                <strong>
                                                    easy
                                                </strong>
                                                to use: one command is enough to synchronize a whole directory
                                            </li>
                                            <li>
                                                <strong>
                                                    versatile
                                                </strong>
                                                : for example, you can make backups to a remote machine, logging in as a
                                                different user.
                                            </li>
                                            <li>
                                                <strong>
                                                    safe
                                                </strong>
                                                : I never had any issue with it, and you can test what rsync will do
                                                with the dry run option before doing it.
                                            </li>
                                        </ul>
                                        <p>
                                            The only drawback with this perfect backup tool is that it's not available
                                            on windows. There were a few solutions, like running rsync with cygwin. But
                                            I got some issues, for example when dealing with filenames with weird
                                            characters like the French accents.
                                        </p>
                                        <p>
                                            Still, I wanted to be able to back up my precious collection of Georges
                                            Brassens, Serge Gainsbourg, and Renaud.
                                        </p>
                                        <p>
                                            Another solution is to install a full Linux virtual machine on the windows
                                            host, but that's really using a sledgehammer to crack a nut, and a complete
                                            waste of time and resources, especially disk space.
                                        </p>
                                        <p>
                                            But now is the future! it's finally possible to run a Linux distribution on
                                            Windows 10 using Windows Subsystem for Linux (WSL). And in this
                                            distribution, to run rsync.
                                        </p>
                                        <p>
                                            In this post, you'll learn how to:
                                        </p>
                                        <ul>
                                            <li>
                                                Enable WSL and install a Linux distribution of your choice
                                            </li>
                                            <li>
                                                Use rsync to back up a folder on your windows PC to another folder on a
                                                different disk on the same PC
                                            </li>
                                        </ul>
                                        <p>
                                            To do this, you must have Windows 10 installed on your PC.
                                            <br/>
                                        </p>
                                        <h2>
                                            Windows Subsystem for Linux (WSL)
                                        </h2>
                                        <p>
                                            The Windows Subsystem for Linux has been introduced in Windows 10. It lets
                                            developers run GNU/Linux environment -- including most command-line tools,
                                            utilities, and applications -- directly on Windows, unmodified, without the
                                            overhead of a virtual machine.
                                        </p>
                                        <p>
                                            It's really easy and the documentation is great! And there is no need for
                                            plagiarism, so I won't repeat the installation instructions here. But I just
                                            want to give you a bit of help to get started.
                                        </p>
                                        <p>
                                            At some point, you will be asked to enable WSL by opening a powershell.
                                        </p>
                                        <p>
                                            You can open the powershell by hitting the windows key or the start button,
                                            and by typing:
                                        </p>
                                        <div className="highlight">
 <pre>powershell
</pre>
                                        </div>
                                        <p>
                                            A terminal window opens. To enable WSL, you need to run powershell as an
                                            administrator. So in your powershell terminal, type:
                                        </p>
                                        <div className="highlight">
 <pre><span></span>Start-Process powershell -Verb runAs
</pre>
                                        </div>
                                        <p>
                                            This opens yet another powershell window where you have administrator
                                            rights. Now you can follow the
                                            <a href="https://docs.microsoft.com/en-us/windows/wsl/install-win10">
                                                instructions from microsoft
                                            </a>
                                            .
                                        </p>
                                        <p>
                                            I chose to install a Debian Linux distribution. You can do the same or
                                            choose ubuntu if you prefer, it will work as well. If you take another
                                            distro, some of my instructions below probably won't work, but you certainly
                                            know what you're doing.
                                        </p>
                                        <p>
                                            After the
                                            <a href="https://docs.microsoft.com/en-us/windows/wsl/initialize-distro">
                                                initialization of your debian system
                                            </a>
                                            , we can get started with rsync.
                                        </p>
                                        <h2>
                                            Install rsync
                                        </h2>
                                        <p>
                                            To install rsync, just do:
                                        </p>
                                        <div className="highlight">
 <pre><span></span>sudo apt install rsync openssh-client
</pre>
                                        </div>
                                        <p>
                                            Then, we're going to test it. Create two directories:
                                        </p>
                                        <div className="highlight">
 <pre><span></span>mkdir srcdir backup
</pre>
                                        </div>
                                        <p>
                                            Now, create two empty files in srcdir, and list the contents of this
                                            directory:
                                        </p>
                                        <div className="highlight">
 <pre><span></span>touch srcdir/file1 srcdir/file2
ls srcdir
</pre>
                                        </div>
                                        <p>
                                            To synchronize the srcdir and backup directories, type:
                                        </p>
                                        <div className="highlight">
 <pre><span></span> rsync -av srcdir/ backup/
</pre>
                                        </div>
                                        <div className="highlight">
 <pre><span></span>sending incremental file list
./
file1
file2

sent 176 bytes  received 57 bytes  466.00 bytes/sec
total size is 0  speedup is 0.00
</pre>
                                        </div>
                                        <p>
                                            Finally, list the destination directory, it contains the two files. Let's
                                            try to remove one of the files before running rsync again:
                                        </p>
                                        <div className="highlight">
 <pre><span></span>rm srcdir/file2
rsync -av srcdir/ backup/
</pre>
                                        </div>
                                        <p>
                                            We see that backup still contains file2. By default, rsync will not delete
                                            anything. If you want to delete, do:
                                        </p>
                                        <div className="highlight">
 <pre><span></span>rsync -av --delete srcdir/ backup/
</pre>
                                        </div>
                                        <div className="highlight">
 <pre><span></span>sending incremental file list
deleting file2

sent 82 bytes  received 21 bytes  206.00 bytes/sec
total size is 0  speedup is 0.00
</pre>
                                        </div>
                                        <p>
                                            You should now have enough faith in rsync to do a backup of your data. Let's
                                            do it!
                                        </p>
                                        <h2>
                                            Mounting an external drive
                                        </h2>
                                        <p>
                                            <strong>
                                                <em>
                                                    DISCLAIMER: before attempting to run the commands below, I strongly
                                                    advise to backup your data!
                                                </em>
                                            </strong>
                                        </p>
                                        <p>
                                            Ok just kidding ;-)
                                        </p>
                                        <p>
                                            I assume that you want to backup to an external drive, so first connect the
                                            drive to your PC. You should be able to see the drive in Windows Explorer.
                                            In the Linux terminal, the mounted drives are in /mnt. List them by doing:
                                        </p>
                                        <div className="highlight">
 <pre><span></span>ls /mnt
</pre>
                                        </div>
                                        <div className="highlight">
 <pre><span></span>c  d  f  i
</pre>
                                        </div>
                                        <p>
                                            These are the letters assigned to the partitions of my drives by Windows. C:
                                            is my system partition.
                                        </p>
                                        <p>
                                            Probably, you will not find your external drive partitions here. It's
                                            mounted by windows, but not by the Linux machine. To mount it, do the
                                            following:
                                        </p>
                                        <ul>
                                            <li>
                                                in Windows Explorer, find out which letter Windows assigned to the
                                                partition on your external drive. Let's say it's J:
                                            </li>
                                            <li>
                                                then, create the mount point and mount the partition
                                            </li>
                                        </ul>
                                        <div className="highlight">
 <pre><span></span>sudo mkdir /mnt/j
sudo mount -t drvfs J: /mnt/j
</pre>
                                        </div>
                                        <p>
                                            You can now see the contents of the partition with
                                        </p>
                                        <div className="highlight">
 <pre><span></span>ls /mnt/j
</pre>
                                        </div>
                                        <p>
                                            and you can go the root of the partition with
                                        </p>
                                        <div className="highlight">
 <pre><span></span>cd /mnt/j
</pre>
                                        </div>
                                        <p>
                                            You can use cd to change directory and ls to list the contents of a
                                            directory.
                                        </p>
                                        <h2>
                                            Starting the backup
                                        </h2>
                                        <p>
                                            Let's assume you want to backup C:\data\ to J:\.
                                        </p>
                                        <p>
                                            Just do the following. The -a option is always needed: it's what most people
                                            use, you can check the rsync manual for more information. The -v option
                                            gives you a verbose output. And the -n option is for dry run: nothing will
                                            happen, this is just a test. Finally, I'm using sudo because I got
                                            permission errors without it.
                                        </p>
                                        <div className="highlight">
 <pre><span></span>sudo rsync -avn /mnt/c/data/ /mnt/j/
</pre>
                                        </div>
                                        <p>
                                            And observe the output. If it looks good to you, rerun without the -n
                                            option.
                                        </p>
                                        <h2>
                                            And now?
                                        </h2>
                                        <p>
                                            In this post, you've learnt how to:
                                        </p>
                                        <ul>
                                            <li>
                                                configure WSL, the Windows Subsystem for Linux, to run a debian machine
                                            </li>
                                            <li>
                                                use rsync to back up your files to an external drive
                                            </li>
                                        </ul>
                                        <p>
                                            Every time you want to do a backup, you should launch the Debian machine and
                                            run the rsync command.
                                        </p>
                                        <p>
                                            It would be nice to automatize this so that the back up is done every time
                                            your start the PC. I don't know how to do this yet, but I'll make an article
                                            as soon as I find out.
                                        </p>
                                        <p>
                                            Stay tuned!
                                        </p>


                                    </div>
                                </div>
                            </div>
                        </div>

            {/*  */}

            {/*</MDBContainer>*/}
        </>
    )
}
