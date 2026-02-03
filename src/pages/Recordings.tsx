import { useState, useCallback } from 'react';
import { VideoCard } from '../components/VideoCard';
import { Shuffle, Calendar, ArrowDownAZ, ArrowUpAZ } from 'lucide-react';

interface Video {
    title: string;
    videoId: string;
    date: string;
    playlistIndex: number;
}

const INITIAL_VIDEOS: Video[] = [
    {
        title: "Native Mobile Botnet & Anti Botnet Solutions - Presented by Ron Munitz",
        videoId: "kmaPtoCOKwM",
        date: "2020-03-31",
        playlistIndex: 0
    },
    {
        title: "Understanding, Building and Researching Minimal (and not so minimal) Linux Systems - Ron Munitz",
        videoId: "JtQu3sLMsWk",
        date: "2020-04-07",
        playlistIndex: 1
    },
    {
        title: "The Yocto Project 10 minute quick-start guide - Ron Munitz",
        videoId: "jFMK7NCXEiw",
        date: "2020-03-23",
        playlistIndex: 2
    },
    {
        title: "Yocto Project quick start guide - tips, guidelines and pitfalls for your first (remote) build",
        videoId: "CZ2cVtAsBVI",
        date: "2020-03-21",
        playlistIndex: 3
    },
    {
        title: "Yocto Project quick start - adding an external application (autotools example)",
        videoId: "fvcdcJMem-0",
        date: "2020-03-22",
        playlistIndex: 4
    },
    {
        title: "Working with Yocto Project images you built on the cloud/server ,understanding runqemu, and layers",
        videoId: "OeXVxnnG_Zs",
        date: "2020-03-25",
        playlistIndex: 5
    },
    {
        title: "Creating a Yocto Project splash screen (relevant for Linux in general) - part I",
        videoId: "lqIbu2qzNPo",
        date: "2020-03-25",
        playlistIndex: 6
    },
    {
        title: "Creating a Yocto Project splash screen Part II: Recipes and replacing the quick, dirty, and bad way.",
        videoId: "-ka-cXlbGlc",
        date: "2020-03-25",
        playlistIndex: 7
    },
    {
        title: "Creating a Yocto Project Splash screen PartIV: Image header creation, and proper layer organization",
        videoId: "a_Yc1zWzTWY",
        date: "2020-03-25",
        playlistIndex: 8
    },
    {
        title: "[GTUG TLV] Android Rom Cooking - Ron Munitz",
        videoId: "OEaAxaPaags",
        date: "2012-08-08",
        playlistIndex: 9
    },
    {
        title: "Tutorial: X86 ROM Cooking 101 - Android Builders Summit",
        videoId: "7iLeBD33Fo0",
        date: "2014-05-28",
        playlistIndex: 10
    },
    {
        title: "KDB setup on the ancient kernel with a serial line, and an intro to KGDB",
        videoId: "AayxDTNOEIw",
        date: "2020-04-05",
        playlistIndex: 11
    },
    {
        title: "Console types, communicating via a serial line, remote Shell and kernel boot with serial console",
        videoId: "meQClmBpjTc",
        date: "2020-04-04",
        playlistIndex: 12
    },
    {
        title: "KDB setup and kernel debugging - part 2 (breakpoints and memory display on a working kernel)",
        videoId: "IKZc5dnH79c",
        date: "2020-04-06",
        playlistIndex: 13
    },
    {
        title: "KGDB setup and kernel cross-debugging - part 3 (GDB on the host, KGDB on the target)",
        videoId: "7rsoizSyWaE",
        date: "2020-04-06",
        playlistIndex: 14
    },
    {
        title: "Using kdb with a keyboard+display console (no need for serial)  (Part 4 of the series)",
        videoId: "L33VGhpkYsE",
        date: "2020-04-07",
        playlistIndex: 15
    },
    {
        title: "Enabling and using KDB in BeagleBoneBlack (Rev C, but relevant for all revisions [and other boards])",
        videoId: "2KJqrsnFz8k",
        date: "2020-04-07",
        playlistIndex: 16
    },
    {
        title: "RISC-V on Linux, Researching minimal Linux Build Systems, Embedded Virtualization. EmbeddedIsrael#3",
        videoId: "TXbWV4K7Ttc",
        date: "2020-04-07",
        playlistIndex: 17
    },
    {
        title: "Understanding, Building and Researching Minimal (and not so minimal) Linux Systems - Ron Munitz",
        videoId: "JtQu3sLMsWk",
        date: "2020-04-07",
        playlistIndex: 18
    },
    {
        title: "Embedded Israel #4 2020 04 26 at 08 15 GMT 7",
        videoId: "QYuWpm3zess",
        date: "2020-04-26",
        playlistIndex: 19
    },
    {
        title: "Meetup #4 Addendum - Adding (and explaining) to the kernel configs + what is is seen and not in UART",
        videoId: "uHXuKIiOQfo",
        date: "2020-04-26",
        playlistIndex: 20
    },
    {
        title: "Practical Linker Scripts 101 (Embedded Israel Meetup #5 2020 05 03 at 08 30 GMT 7)",
        videoId: "hTejqS7jVJk",
        date: "2020-05-03",
        playlistIndex: 21
    },
    {
        title: "Practical Linker Scripts 101 (Embedded Israel Meetup #5 2020 05 03 at 08 30 GMT 7)",
        videoId: "hTejqS7jVJk",
        date: "2020-05-03",
        playlistIndex: 22
    },
    {
        title: "Linker scripts in the Linux Kernel, Kernel Image structure, and x86 boot sector debugging",
        videoId: "W4VWFrMRyS8",
        date: "2020-05-04",
        playlistIndex: 23
    },
    {
        title: "x86 kernel startup debugging and disassembling - from 0x200 to start_kernel",
        videoId: "vD7U5cihQPM",
        date: "2020-05-04",
        playlistIndex: 24
    },
    {
        title: "ARM early boot debugging (with QEMU and BeagleBoneblack Yocto build)",
        videoId: "SrogUtGUF8s",
        date: "2020-05-06",
        playlistIndex: 25
    },
    {
        title: "Linux Kernel debugging with Visual Studio Code",
        videoId: "dXhm3Kdnnbg",
        date: "2020-05-12",
        playlistIndex: 26
    },
    {
        title: "Linux Kernel debugging with Visual Studio Code",
        videoId: "dXhm3Kdnnbg",
        date: "2020-05-12",
        playlistIndex: 27
    },
    {
        title: "Embedded Israel Meetup #8: 1) Linux Kernel init: filesystems. 2) Checkm8 iOS bootrom exploit",
        videoId: "6L0IODZ_BVY",
        date: "2020-08-11",
        playlistIndex: 28
    },
    {
        title: "Part 5 - on Linux itself",
        videoId: "THNt8ObsGJQ",
        date: "2023-01-22",
        playlistIndex: 29
    },
    {
        title: "Linux on Macbooks - in and out of MacOS (Embedded Israel meeting #9)",
        videoId: "j5ajUgxmqKU",
        date: "2023-01-24",
        playlistIndex: 30
    },
    {
        title: "Building from source and booting your own WSL2 kernel",
        videoId: "6lqMeg_n7l4",
        date: "2023-03-23",
        playlistIndex: 31
    },
    {
        title: "Building e2fsprogs statically [1/2] -  Motivation and simple build explanation (autotool/make)",
        videoId: "-fyQmTXbSBw",
        date: "2024-02-01",
        playlistIndex: 32
    },
    {
        title: "Building dosfstools statically",
        videoId: "_F7wJxUteCE",
        date: "2024-02-21",
        playlistIndex: 33
    },
    {
        title: "x86_64 Ubuntu initramfs to systemd unpacking: Part I: From startup to microcode loading",
        videoId: "lVYfrV_Qx7c",
        date: "2024-03-01",
        playlistIndex: 34
    },
    {
        title: "x86_64 Ubuntu initramfs to systemd unpacking: Part II: unmkinitramfs code review, optimization tips",
        videoId: "csJ1RJaSzCE",
        date: "2024-03-01",
        playlistIndex: 35
    },
    {
        title: "initramfs to systemd unpacking:  Part III: initramfs's init code review, klibc, busybox, kernel",
        videoId: "5DGMhDw73CM",
        date: "2024-03-03",
        playlistIndex: 36
    },
    {
        title: "Embedded Israel #14 - Introduction to Build Systems (video with crowd)",
        videoId: "4jM7tFfbwos",
        date: "2024-04-02",
        playlistIndex: 37
    },
    {
        title: "Embedded Israel #14: Introduction to build systems and PSCGBuildOS preview",
        videoId: "jIjiaK_G6Fg",
        date: "2024-04-05",
        playlistIndex: 38
    },
    {
        title: "PscgBuildOS: Reusing previous builds installables and quickly hooking alpine rootfs into the system",
        videoId: "WirNfHM9mec",
        date: "2024-04-05",
        playlistIndex: 39
    },
    {
        title: "PscgBuildOS: overlay tarballs, read-only rootfs, overlayfs internals, and autocleaning systems",
        videoId: "gtr3UTin9WQ",
        date: "2024-04-10",
        playlistIndex: 40
    },
    {
        title: "PscgBuildOS: Building pscg_alpineos the right way",
        videoId: "z5knWzLTGt8",
        date: "2024-04-11",
        playlistIndex: 41
    },
    {
        title: "Ubuntu on the BeagleV - ahead, live from the Sheraton (haha)",
        videoId: "4oh1LAkgKkQ",
        date: "2024-04-20",
        playlistIndex: 42
    },
    {
        title: "Debootstrapping Embedded Linux Root Filesystems - Building and Optimization for the... - Ron Munitz",
        videoId: "crHggVmDDVw",
        date: "2024-04-26",
        playlistIndex: 43
    },
    {
        title: "EOSS North America 2024 talk addendum - Debootstrapping Ubuntu 24.04 Noble Numbat",
        videoId: "Y0oifA_Uyf0",
        date: "2024-08-09",
        playlistIndex: 44
    },
    {
        title: "A practical introduction to the Zephyr Project - Live from  #embeddedisrael #meetup 16",
        videoId: "Z1jOj6OD5TI",
        date: "2024-07-31",
        playlistIndex: 45
    },
    {
        title: "#embbeddedisrael meetup 17 - The Linux graphics practical talk part 1",
        videoId: "NQz6VqvtehI",
        date: "2024-08-15",
        playlistIndex: 46
    },
    {
        title: "#embbeddedisrael meetup 17 - The Linux graphics practical talk part 2 (Please increase your volume)",
        videoId: "UfUGd5DMBsg",
        date: "2024-08-15",
        playlistIndex: 47
    },
    {
        title: "#embbeddedisrael meetup 17 - The Linux graphics practical talk part 3 - DRI/DRM",
        videoId: "odmiDUhjrKI",
        date: "2024-08-15",
        playlistIndex: 48
    },
    {
        title: "#embeddedisrael meetup 17: Vulkan & GPU Foundations by Vadim Grinshpan ( Staff SW Engineer @ ARM )",
        videoId: "G7Kg1Qz5b6k",
        date: "2024-08-15",
        playlistIndex: 49
    },
    {
        title: "Explaining tradeoffs and sizes when going up from a minimal kernel config (meetup17 prep)",
        videoId: "99AGKymdwJc",
        date: "2024-08-17",
        playlistIndex: 50
    },
    {
        title: "Android-X86 and DRI - another take (motivation) at the graphics talk Part 0",
        videoId: "-Szwuzn16F4",
        date: "2024-08-06",
        playlistIndex: 51
    },
    {
        title: "Android-X86 and DRI - another take (motivation) at the graphics talk - Part 1",
        videoId: "QwjAH0e2Abg",
        date: "2024-08-06",
        playlistIndex: 52
    },
    {
        title: "Android-X86 and DRI - another take (motivation) at the graphics talk Part 2",
        videoId: "1nzG22bZ7Vs",
        date: "2024-08-06",
        playlistIndex: 53
    },
    {
        title: "Android-X86 and DRI - another take (motivation) at the graphics talk - Part 3",
        videoId: "-ncBcSra1Yw",
        date: "2024-08-06",
        playlistIndex: 54
    },
    {
        title: "Meetup 17 addendum: LVGL and uGFX in a debootstrapped Ubuntu 24.04",
        videoId: "gjjQcTFGTnU",
        date: "2024-08-09",
        playlistIndex: 55
    },
    {
        title: "Meetup 17 Addendum: Running Qt without X, troubleshooting 9p, minimal kernel configs and more-Part I",
        videoId: "Vaatqxvot_c",
        date: "2024-08-10",
        playlistIndex: 56
    },
    {
        title: "Meetup 17: From a minimal kernel config to running a Qt app with input and an i915 GPU virtio device",
        videoId: "80RxW3wlbu0",
        date: "2024-08-14",
        playlistIndex: 57
    },
    {
        title: "From Debootstrap to a minimal Wayland/Weston environment running a simple Qt app",
        videoId: "bb6FjFhDXNg",
        date: "2024-08-14",
        playlistIndex: 58
    },
    {
        title: "Adding Gnome (ubuntu-gnome-desktop) and KDE (plasma-dekstop) to our system",
        videoId: "0l724M3_n74",
        date: "2024-08-15",
        playlistIndex: 59
    },
    {
        title: "Package installation: after installing weston, before showing the bluetooth dongle passthrough demo",
        videoId: "4pMqWBux2Ns",
        date: "2024-08-14",
        playlistIndex: 60
    },
    {
        title: "Adding WiFi and Bluetooth support (rtl 8821c in QEMU via USB pass through) and showing Qt+bluetooth",
        videoId: "_awPfHGyo9Y",
        date: "2024-08-14",
        playlistIndex: 61
    },
    {
        title: "Enabling 10\" LVDS in Toradex Easy Installer (Tezi), Verdin i.MX8M Plus",
        videoId: "AmrEA5NGTiw",
        date: "2025-04-10",
        playlistIndex: 62
    },
    {
        title: "Tezi with LVDS addendum - and the file names that will be in the GitHub repository",
        videoId: "NkumKyMxlmU",
        date: "2025-04-10",
        playlistIndex: 63
    },
    {
        title: "Serving a Torizon OS built image to Tezi over the network and installing it",
        videoId: "4_Px4J5xY78",
        date: "2025-04-11",
        playlistIndex: 64
    },
    {
        title: "Tezi - customizing an image for unattended installation (automatic one) and some custom graphics",
        videoId: "rzL4m6BKssI",
        date: "2025-04-11",
        playlistIndex: 65
    },
    {
        title: "Using Wayland and GPU acceleration inside Docker (Host: Ubuntu 24.10, Docker: Ubuntu 25.04)",
        videoId: "Acc9mAeFjGA",
        date: "2025-04-18",
        playlistIndex: 66
    },
    {
        title: "Using electronjs and electronforge inside a docker with wayland",
        videoId: "v8jUSUhvGwY",
        date: "2025-04-18",
        playlistIndex: 67
    },
    {
        title: "Torizon boot time (Weston container, Tauri container) - \"fixing\" Plymouth, no VNC",
        videoId: "WL0fpI9RUvk",
        date: "2025-04-27",
        playlistIndex: 68
    },
    {
        title: "Torizon boot to a VNC enabled screen (same as previous video, but also with VNC",
        videoId: "N5YrNttWz3A",
        date: "2025-04-27",
        playlistIndex: 69
    },
    {
        title: "Torizon - boot to a kmscube container without Weston (flicker), using busybox fbplash on the rootfs.",
        videoId: "WEB27D3vBwA",
        date: "2025-04-29",
        playlistIndex: 70
    },
    {
        title: "Torizon fbsplash/containers/Weston/Tauri flow and glitches examples",
        videoId: "vMW7HcrtHQM",
        date: "2025-04-29",
        playlistIndex: 71
    },
    {
        title: "Toradex - Tezi running from internal flash showing graphics under 10 seconds",
        videoId: "UJ0hKjHKZsM",
        date: "2025-04-29",
        playlistIndex: 72
    },
    {
        title: "Tezi - Toradex Easy Installer full Linux initialization explanation",
        videoId: "MdZDfwThbPg",
        date: "2025-04-30",
        playlistIndex: 73
    },
    {
        title: "Torizon - no flickers - kiosk-shell Weston+ Chromium",
        videoId: "7Rhswiv0jwM",
        date: "2025-04-29",
        playlistIndex: 74
    },
    {
        title: "Torizon Core Builder practical and comprehensive tutorial covering everything but kernel development",
        videoId: "Lc0Fstwls38",
        date: "2025-05-01",
        playlistIndex: 75
    },
    {
        title: "Tezi and Torizon Core Builder: Licenses, Release Notes, and auto installation considerations",
        videoId: "M_kjWjX33U8",
        date: "2025-05-01",
        playlistIndex: 76
    },
    {
        title: "Torizon Core Builder offline builds",
        videoId: "_d6O4ZCholk",
        date: "2025-05-01",
        playlistIndex: 77
    },
    {
        title: "2 Hacking HiSilicon Cameras for   Necessity and hacking several million other devices while at it Ro",
        videoId: "IKiKk-rJ3LM",
        date: "2025-01-13",
        playlistIndex: 78
    },
    {
        title: "#EmbeddedIsrael #21 - The Kexec/Kdump practical talk",
        videoId: "U-DKdswpVT4",
        date: "2025-05-26",
        playlistIndex: 79
    },
    {
        title: "#EmbeddedIsrael #21 - State Persistence over Kexec - Kexec HandOver (KHO)",
        videoId: "at653wGOfT4",
        date: "2025-05-26",
        playlistIndex: 80
    },
    {
        title: "kexec/kdump on an arm64 minimal distro (PscgBuildOS / pscg_busyboxos",
        videoId: "GKWMN53PxjM",
        date: "2025-05-27",
        playlistIndex: 81
    },
    {
        title: "kexec: loading an ubuntu kernel and initramfs on a vanilla Linux kernel 6.15 and busybox  ramdisk",
        videoId: "4ljjbzHWKIo",
        date: "2025-05-27",
        playlistIndex: 82
    },
    {
        title: "Qualcomm Dragonboard unpacking (before removing Android, and making the device Linux)",
        videoId: "csPkZXOrWhw",
        date: "2025-07-17",
        playlistIndex: 83
    },
    {
        title: "Working with Qualcomm Devices:  Android to Linux, QDL, fastboot - gotchas and pitfall",
        videoId: "hOCkSSQi1MU",
        date: "2025-07-05",
        playlistIndex: 84
    },
    {
        title: "Qualcomm: Adding EVDEV to the Linux kernel via the Yocto Project and fixing core-image-weston input",
        videoId: "laNzDgCHlb0",
        date: "2025-07-17",
        playlistIndex: 85
    },
    {
        title: "Qualcomm:  Quickly hacking remote access to your Linux device without being a Yocto Project genius",
        videoId: "Q-Ijq516adw",
        date: "2025-07-17",
        playlistIndex: 86
    },
    {
        title: "Qualcomm:  Short recap of flashing our neatvnc and RDP built core-weston- image",
        videoId: "amkPayDTP-I",
        date: "2025-07-18",
        playlistIndex: 87
    },
    {
        title: "Enabling VNC and RDP   all the changes we did on the Yocto Project itself",
        videoId: "eXXucIMdFqI",
        date: "2025-07-18",
        playlistIndex: 88
    },
    {
        title: "Enabling VNC in Weston - the Yocto Project part",
        videoId: "TPURq8_R3j4",
        date: "2025-07-17",
        playlistIndex: 89
    },
    {
        title: "Yocto Project RDP and VNC when everything is built, weston.ini is unotuched Certificate motivation.",
        videoId: "2p_nJ2xyeEQ",
        date: "2025-07-18",
        playlistIndex: 90
    },
    {
        title: "Qualcomm/Yocto: Setting up TLS certificates and using a standalone Weston VNC and RDP servers",
        videoId: "ZB7tkViEzbc",
        date: "2025-07-19",
        playlistIndex: 91
    },
    {
        title: "Running Weston RDP and VNC inside a chroot to the Yocto Project vanilla rootfs",
        videoId: "RijI4wjhwwg",
        date: "2025-07-19",
        playlistIndex: 92
    },
    {
        title: "Qualcomm:  Enabling screen shares with VNC and RDP both on a real target and in chroot (both Yocto)",
        videoId: "zGSmL894mUU",
        date: "2025-07-19",
        playlistIndex: 93
    },
    {
        title: "Yocto Project: meta-weston-remote and meta-weston-remote-distro - wrapping up VNC and RDP in yocto",
        videoId: "IGakHmf-aBA",
        date: "2025-07-23",
        playlistIndex: 94
    },
    {
        title: "Adding adb support to your Yocto Project build (Qualcomm and almost any other device )",
        videoId: "R598bWrdjbg",
        date: "2025-07-24",
        playlistIndex: 95
    },
    {
        title: "Yocto Project: Using systemd to automatically enable adbd and wlan0 connectivity (All in build time)",
        videoId: "GGUf4a7IxWw",
        date: "2025-07-26",
        playlistIndex: 96
    },
    {
        title: "Qualcomm/Yocto Project: Persisting the kernel configuration changes with a configuration fragment",
        videoId: "JT6Bws4Xlzw",
        date: "2025-07-26",
        playlistIndex: 97
    },
    {
        title: "DevOps for Embedded Development ",
        videoId: " Mariusz Walczyk",
        date: "XuG3sur2bsA",
        playlistIndex: 98
    },
    {
        title: "#embeddedisrael meetup 23 -  DevOps concerns and motivation for Tauri/Rust, Electron, etc. builders",
        videoId: "mS1U65Qd3G0",
        date: "2025-07-29",
        playlistIndex: 99
    },
    {
        title: "PscbBuildOS Debian sid Trixie/Forky for loongarch64,  build caches and reproducible builds (part 1)",
        videoId: "463KV_AQT0c",
        date: "2025-08-18",
        playlistIndex: 100
    },
    {
        title: "PscgBuildOS Understanding caches and troubleshooting between versions with riscv64 (Part 2)",
        videoId: "rR366koiXDc",
        date: "2025-08-18",
        playlistIndex: 101
    },
    {
        title: "PscgBuildOS motivation: Super fast ramdisk rebuilding and testing for complex OTA/recovery scenarios",
        videoId: "_ZF6qq4unds",
        date: "2025-08-19",
        playlistIndex: 102
    },
    {
        title: "PscgBuildOS: First (clean) builds and caching and build structure. Linux kernel 6.17-rc2/busybox",
        videoId: "K5lwgZVs500",
        date: "2025-08-19",
        playlistIndex: 103
    },
    {
        title: "PscgBuildOS: Storage considerations, configuration, troubleshooting and adaptation to rootfs sizes",
        videoId: "9rqbTzOgONk",
        date: "2025-08-20",
        playlistIndex: 104
    },
    {
        title: "PscgBuildOS: Storage considerations addendum   keeping per architecture installer and storage images",
        videoId: "YJJyjAe74Rk",
        date: "2025-08-20",
        playlistIndex: 105
    },
    {
        title: "PscgBuildOS: adding a new architecture (s390x) to various distros. Walkthrough and troubleshooting",
        videoId: "CYf0ainswdo",
        date: "2025-08-25",
        playlistIndex: 106
    },
    {
        title: "PscgBuildOS: Reusing build materials",
        videoId: "JKlz2s47E9s",
        date: "2025-09-04",
        playlistIndex: 107
    },
    {
        title: "Quickly adding hardware to Alpine and QEMU -  RTL8821CU. Part I: WiFi",
        videoId: "Y6BKlzAHRsM",
        date: "2025-09-07",
        playlistIndex: 108
    },
    {
        title: "Quickly adding hardware to Alpine and QEMU -  RTL8821CU. Part II: Bluetooth",
        videoId: "nxNWKX9sSCA",
        date: "2025-09-07",
        playlistIndex: 109
    },
    {
        title: "Adding firmware to the Linux kernel builtin (a.k.a: Quickly adding hardware to Alpine - Part III)",
        videoId: "WJzppdaqk0Y",
        date: "2025-09-07",
        playlistIndex: 110
    },
    {
        title: "PscgBuildOS: the complete modules and firmware what goes where and how (initramfs vs. rootfs) guide",
        videoId: "Ns-gvGooBrc",
        date: "2025-09-09",
        playlistIndex: 111
    },
    {
        title: "PscgBuildOS: Creating, adding, building and testing the 8821cu layer",
        videoId: "WfoMf0H3Hag",
        date: "2025-09-10",
        playlistIndex: 112
    },
    {
        title: "The beginning of another Toradex related series. (the result of patience and determination...)",
        videoId: "1RjQ_q7eo_E",
        date: "2025-09-20",
        playlistIndex: 113
    },
    {
        title: "Mallow board unpacking (iMX8MP): powering up the device when you don't have the right adapter cable",
        videoId: "6RE3Kr5LLJk",
        date: "2025-09-20",
        playlistIndex: 114
    },
    {
        title: "imx8MP on Mallow: connecting to Tezi via USB and VNC",
        videoId: "CrtpzJFlmcY",
        date: "2025-09-20",
        playlistIndex: 115
    },
    {
        title: "imx8MP on Mallow:  installing and booting to a chrome kiosk device",
        videoId: "HKvGuu15gE8",
        date: "2025-09-20",
        playlistIndex: 116
    },
    {
        title: "Unboxing Toradex imx95 EVK",
        videoId: "gF5eZ6FzOME",
        date: "2025-09-20",
        playlistIndex: 117
    },
    {
        title: "OVMF secure boot keys enrollment",
        videoId: "rf1yviexefY",
        date: "2025-12-20",
        playlistIndex: 118
    },
    {
        title: "PscgBuildOS: OTA service initramfs update flow modification: Part 1 -  motivation",
        videoId: "TsMGX3pX2Pg",
        date: "2026-01-15",
        playlistIndex: 119
    },
    {
        title: "PscgBuildOS: OTA service initramfs update flow modification: Part 2 -   initramfs debugging",
        videoId: "hiYod7Dp_jI",
        date: "2026-01-15",
        playlistIndex: 120
    },
    {
        title: "PscgBuildOS: OTA service initramfs update flow modification: Part 3 -    Userspace service debugging",
        videoId: "Nakch9w-yco",
        date: "2026-01-15",
        playlistIndex: 121
    },
    {
        title: "PscgBuildOS: OTA service initramfs update flow modification: Part 4 - fixing ,building & wrapping up",
        videoId: "tXDdY_-qG7s",
        date: "2026-01-15",
        playlistIndex: 122
    },
    {
        title: "AMLogic: eMMC boot partitions wreaking havoc and recovering  where hardware is fine but hope is lost",
        videoId: "5K7ZHF8bxq4",
        date: "2026-01-27",
        playlistIndex: 123
    },
    {
        title: "AMLogic: Replacing the boot chain on s905w/s905x devices with mainline U-boot and Linux (6.19)",
        videoId: "E4isBhoqOTQ",
        date: "2026-01-27",
        playlistIndex: 124
    },
    {
        title: "AMLogic: U-Boot replacement:  Android vendor bootchain and modernized FIP creation scripts explained",
        videoId: "Ib4Rap7a2yw",
        date: "2026-01-27",
        playlistIndex: 125
    },
    {
        title: "PscgBuildOS: AMLogic full A/B OTA flows showcasing: avahi, Debian, Alpine, pscg busyboxos AB updates",
        videoId: "RsQQCjLLlYs",
        date: "2026-01-22",
        playlistIndex: 126
    },
    {
        title: "PscgBuildOS: AMLogic layer integration - a complete guide - Part I - BSP layer",
        videoId: "qRt59uIHmNM",
        date: "2026-01-27",
        playlistIndex: 127
    },
    {
        title: "PscgBuildOS: AMLogic layer integration - a complete guide - Part II - initramfs code",
        videoId: "BRWwgCquW2E",
        date: "2026-01-27",
        playlistIndex: 128
    },
    {
        title: "PscgBuildOS:  Using the Docker based pscg-dockos-richosonly for bullet userspace logic tests",
        videoId: "LxldSiYjNXA",
        date: "2026-01-29",
        playlistIndex: 129
    },
    {
        title: "PscgBuildOS: blazing fast full system control from the initramfs and on with pscg-dockos-rd",
        videoId: "e28RXdeAgGQ",
        date: "2026-01-29",
        playlistIndex: 130
    },
    {
        title: "PscgBuildOS: rewriting pscg alpineos as a cache manages offline buildable distro",
        videoId: "iBHb7rhtGCk",
        date: "2026-01-29",
        playlistIndex: 131
    },
    {
        title: "PscgBuildOS: recapping the AMLogic builds after updating the helper scripts",
        videoId: "4s4He7ZkDXs",
        date: "2026-02-01",
        playlistIndex: 132
    },
    {
        title: "PscgBuildOS: recapping the AMLogic OTA demonstrations after updating the helper scripts",
        videoId: "0yUFK-mL9wQ",
        date: "2026-02-01",
        playlistIndex: 133
    },
];

type SortMode = 'newest' | 'oldest' | 'az' | 'za' | 'random';

export function Recordings() {
    const [videos, setVideos] = useState<Video[]>(INITIAL_VIDEOS);
    const [sortMode, setSortMode] = useState<SortMode>('newest');

    const handleSort = useCallback((mode: SortMode) => {
        setSortMode(mode);
        setVideos(prev => {
            const sorted = [...prev].sort((a, b) => {
                switch (mode) {
                    case 'newest':
                        // Assuming higher index means newer in the playlist, 
                        // but if the playlist is chronological, higher index is usually newer.
                        // We will sort by playlistIndex descending for "newest".
                        return b.playlistIndex - a.playlistIndex;
                    case 'oldest':
                        return a.playlistIndex - b.playlistIndex;
                    case 'az':
                        return a.title.localeCompare(b.title);
                    case 'za':
                        return b.title.localeCompare(a.title);
                    default:
                        return 0;
                }
            });
            return sorted;
        });
    }, []);

    const handleShuffle = useCallback(() => {
        setSortMode('random');
        setVideos(prev => {
            const shuffled = [...prev];
            // Fisher-Yates shuffle
            for (let i = shuffled.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
            }
            return shuffled;
        });
    }, []);

    return (
        <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="mb-12">
                <h1 className="text-4xl font-bold text-white mb-4">Recorded Talks</h1>
                <p className="text-xl text-gray-400 mb-8">
                    Watch replays of our meetups, tutorials, and deep dives into embedded systems.
                </p>

                {/* Controls */}
                <div className="flex flex-wrap items-center gap-4 bg-white/5 p-4 rounded-lg border border-white/10">
                    <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-400 font-medium">Sort by:</span>
                        <div className="flex bg-black/20 rounded-md p-1">
                            <button
                                onClick={() => handleSort('newest')}
                                className={`p-2 rounded transition-colors ${sortMode === 'newest' ? 'bg-primary text-white' : 'text-gray-400 hover:text-white'}`}
                                title="Playlist Newest"
                            >
                                <Calendar className="w-4 h-4" />
                            </button>
                            <button
                                onClick={() => handleSort('oldest')}
                                className={`p-2 rounded transition-colors ${sortMode === 'oldest' ? 'bg-primary text-white' : 'text-gray-400 hover:text-white'}`}
                                title="Playlist Oldest"
                            >
                                <Calendar className="w-4 h-4 rotate-180" />
                            </button>
                            <button
                                onClick={() => handleSort('az')}
                                className={`p-2 rounded transition-colors ${sortMode === 'az' ? 'bg-primary text-white' : 'text-gray-400 hover:text-white'}`}
                                title="A-Z"
                            >
                                <ArrowDownAZ className="w-4 h-4" />
                            </button>
                            <button
                                onClick={() => handleSort('za')}
                                className={`p-2 rounded transition-colors ${sortMode === 'za' ? 'bg-primary text-white' : 'text-gray-400 hover:text-white'}`}
                                title="Z-A"
                            >
                                <ArrowUpAZ className="w-4 h-4" />
                            </button>
                        </div>
                    </div>

                    <div className="h-6 w-px bg-white/10 hidden sm:block" />

                    <button
                        onClick={handleShuffle}
                        className="flex items-center gap-2 px-4 py-2 rounded-md bg-white/10 hover:bg-white/20 text-white transition-colors text-sm font-medium"
                    >
                        <Shuffle className="w-4 h-4" />
                        <span>Shuffle</span>
                    </button>
                    
                    <div className="ml-auto text-sm text-gray-500">
                        {videos.length} videos
                    </div>
                </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {videos.map((video) => (
                    <VideoCard
                        key={video.videoId}
                        title={video.title}
                        videoId={video.videoId}
                    />
                ))}
            </div>

            <div className="mt-16 text-center">
                <a
                    href="https://www.youtube.com/watch?v=kmaPtoCOKwM&list=PLBaH8x4hthVysdRTOlg2_8hL6CWCnN5l-"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-white/10 hover:bg-white/20 border border-white/10 rounded-md transition-colors"
                >
                    View Full Playlist on YouTube
                </a>
            </div>
        </div>
    );
}
