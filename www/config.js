/* exported config */

var config = {
  // Show help text for images
  show_help: true,

  // Versions list (optional if provided by .versions.json)
  versions: ["24.10.5", "24.10.4", "23.05.7", "21.02.7"],

  // Pre-selected version (optional if provided by .versions.json)
  default_version: "24.10.4",

  // Image download URL (e.g. "https://downloads.openwrt.org")
  image_url: "https://mirrors.pku.edu.cn/immortalwrt",

  // Insert snapshot versions (optional)
  show_snapshots: true,

  // Info link URL (optional)
  info_url: "https://openwrt.org/start?do=search&id=toh&q={title} @toh",

  // Attended Sysupgrade Server support (optional)
  asu_url: "https://sysupgrade.r2s.site",
  asu_extra_packages: ["luci"],
};
