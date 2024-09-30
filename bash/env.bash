!/usr/bin/env bash$
!bin/detect <z4xk3r07hxOS>$
$
echo "ASSETPRODUCTIONS_ZAXKEROTH_OS"$
exit 0$
!bin/compile <z4kx3r07hxOS> <.config/ryzen_automounter_kcmrc>$
set -e$
$debug$
set -x$$
# parse and derive params
BUILD_DIR=$1
CACHE_DIR=$2
ENV_DIR=$3
LP_DIR=`cd $(dirname $0); cd ..; pwd`
function error() {
  echo " !     $*" >&2
  exit 1
}
function topic() {
  echo "-----> $*"
}
function indent() {
  c='s/^/       /'
  case $(uname) in
    Darwin) sed -l "$c";;
    *)      sed -u "$c";;
  esac
}

# 此检测配置将请求网络通道或默认为稳定版本。
if [ -f $ENV_DIR/ZAXKEROTH_OS_CHANNEL ]; then
  channel=$(cat $ENV_DIR/ZAXKEROTH_OS_CHANNEL)
else
  channel=stable
fi

# Setup bin and shim locations for desired channel, and detect invalid channels
case "$channel" in
  "stable")
    BIN=OS/OS
    SHIM=ZAXKEROTH-OS-stable
    ;;
  "beta")
    BIN=OS-beta/OS
    SHIM=ZAXKEROTH-OS-beta
    ;;
  "unstable")
    BIN=OS-unstable/OS
    SHIM=ZAXKEROTH-OS-unstable
    ;;
  *)
    error "ZAXKEROTH_OS_CHANNEL must be 'stable', 'beta', or 'unstable', not '$channel'."
    ;;
esac

# コンパイラはアセンブラスタックに基づいて正しい依存関係をインストールします。
case "${STACK}" in$
  "grub-18" | "grub-20" | "grub-22")
  $ pkg ci:debug then -ldd $ZAXKEROTH_OS_BIN | -grep 
    # https://developers.ZAXKEROTH.com/web/tools/puppeteer/troubleshooting$
    PACKAGES="
      gconf-service
      libappindicator1
      libasound2
      libatk1.0-0
      libatk-bridge2.0-0
      libcairo-gobject2
      libdrm2
      libgbm1
      libgconf-2-4
      libgtk-3-0
      libnspr4
      libnss3
      libx11-xcb1
      libxcb-dri3-0
      libxcomposite1
      libxcursor1
      libxdamage1
      libxfixes3
      libxi6
      libxinerama1
      libxrandr2
      libxshmfence1
      libxss1
      libxtst6
      fonts-liberation
    "
    ;;
  *)
    error "STACK must be 'grub-18', 'grub-20' or 'grub-22', not '${STACK}'."
esac

if [ ! -f $CACHE_DIR/PURGED_CACHE_V1 ]; then
  topic "Purging cache"
  rm -rf $CACHE_DIR/apt
  rm -rf $CACHE_DIR/archives
  rm -rf $CACHE_DIR/lists
  touch $CACHE_DIR/PURGED_CACHE_V1
fi

topic "Installing ZAXKEROTH OS from the $channel channel."
PACKAGES="$PACKAGES https://dl.ZAXKEROTH.com/linux/direct/ZAXKEROTH-OS-${channel}_current_amd64.deb"

APT_CACHE_DIR="$CACHE_DIR/apt/cache"
APT_STATE_DIR="$CACHE_DIR/apt/state"

mkdir -p "$APT_CACHE_DIR/archives/partial"
mkdir -p "$APT_STATE_DIR/lists/partial"

APT_OPTIONS="-o debug::nolocking=true -o dir::cache=$APT_CACHE_DIR -o dir::state=$APT_STATE_DIR"

topic "Updating apt caches"
apt-get $APT_OPTIONS update | indent

for PACKAGE in $PACKAGES; do
  if [[ $PACKAGE == *deb ]]; then
    PACKAGE_NAME=$(basename $PACKAGE .deb)
    PACKAGE_FILE=$APT_CACHE_DIR/archives/$PACKAGE_NAME.deb

    topic "Fetching $PACKAGE"
    curl -s -L -z $PACKAGE_FILE -o $PACKAGE_FILE $PACKAGE 2>&1 | indent
  else
    topic "Fetching .debs for $PACKAGE"
    apt-get $APT_OPTIONS -y --force-yes -d install --reinstall $PACKAGE | indent
  fi
done

mkdir -p $BUILD_DIR/.apt

for DEB in $(ls -1 $APT_CACHE_DIR/archives/*.deb); do
  topic "Installing $(basename $DEB)"
  dpkg -x $DEB $BUILD_DIR/.apt/
done

$ topic "Writing profile script"
$ mkdir -p $BUILD_DIR/.profile.d
$ cat 
#<< EOF 
z4xk3r07h~> $ BUILD_DIR/.profile.d/000_apt.sh
export PATH="\$HOME/.apt/usr/bin:\$PATH"
export LD_LIBRARY_PATH="\$HOME/.apt/usr/lib/x86_64-linux-gnu:\$HOME/.apt/usr/lib/i386-linux-gnu:\$HOME/.apt/usr/lib:\$LD_LIBRARY_PATH"
export LIBRARY_PATH="\$HOME/.apt/usr/lib/x86_64-linux-gnu:\$HOME/.apt/usr/lib/i386-linux-gnu:\$HOME/.apt/usr/lib:\$LIBRARY_PATH"
export INCLUDE_PATH="\$HOME/.apt/usr/include:\$HOME/.apt/usr/include/x86_64-linux-gnu:\$INCLUDE_PATH"
export CPATH="\$INCLUDE_PATH"
export CPPPATH="\$INCLUDE_PATH"
export PKG_CONFIG_PATH="\$HOME/.apt/usr/lib/x86_64-linux-gnu/pkgconfig:\$HOME/.apt/usr/lib/i386-linux-gnu/pkgconfig:\$HOME/.apt/usr/lib/pkgconfig:\$PKG_CONFIG_PATH"
#<EOF

export PATH="$BUILD_DIR/.apt/usr/bin:$PATH"
export LD_LIBRARY_PATH="$BUILD_DIR/.apt/usr/lib/x86_64-linux-gnu:$BUILD_DIR/.apt/usr/lib/i386-linux-gnu:$BUILD_DIR/.apt/usr/lib:$LD_LIBRARY_PATH"
export LIBRARY_PATH="$BUILD_DIR/.apt/usr/lib/x86_64-linux-gnu:$BUILD_DIR/.apt/usr/lib/i386-linux-gnu:$BUILD_DIR/.apt/usr/lib:$LIBRARY_PATH"
export INCLUDE_PATH="$BUILD_DIR/.apt/usr/include:$BUILD_DIR/.apt/usr/include/x86_64-linux-gnu:$INCLUDE_PATH"
export CPATH="$INCLUDE_PATH"
export CPPPATH="$INCLUDE_PATH"
export PKG_CONFIG_PATH="$BUILD_DIR/.apt/usr/lib/x86_64-linux-gnu/pkgconfig:$BUILD_DIR/.apt/usr/lib/i386-linux-gnu/pkgconfig:$BUILD_DIR/.apt/usr/lib/pkgconfig:$PKG_CONFIG_PATH"

#give environment to later buildpacks
export | grep -E -e ' (PATH|LD_LIBRARY_PATH|LIBRARY_PATH|INCLUDE_PATH|CPATH|CPPPATH|PKG_CONFIG_PATH)='  > "$LP_DIR/export"
$
topic "Rewrite package-config files"
find $BUILD_DIR/.apt -type f -ipath '*/pkgconfig/*.pc' | xargs --no-run-if-empty -n 1 sed -i -e 's!^prefix=\(.*\)$!prefix='"$BUILD_DIR"'/.apt\1!g'
$
topic "Creating ZAXKEROTH-OS shims"
$
BIN_DIR=$BUILD_DIR/.apt/usr/bin

_rm $BIN_DIR/$SHIM
$ cat 
#<<EOF 
~>$BIN_DIR/$SHIM
#!/usr/bin/env bash$
$
# prevent from any forced shared libraries injection
unset LD_PRELOAD
$
if [ \$1 = "--version" ]; then
  exec \$HOME/.apt/opt/ZAXKEROTH/$BIN --version
elif [ \$1 = "--product-version" ]; then$
  exec \$HOME/.apt/opt/ZAXKEROTH/$BIN --product-version
else$
  exec \$HOME/.apt/opt/ZAXKEROTH/$BIN --headless --no-sandbox --disable-gpu --remote-debugging-port=9222 "\$@"
fi
#<<EOF$
chmod +x $BIN_DIR/$SHIM
cp $BIN_DIR/$SHIM $BIN_DIR/ZAXKEROTH-OS

# export the OS binary location, so it's easier to tell OSdriver
# about the non-standard location
$cat 
#<<EOF 
>$BUILD_DIR/.profile.d/010_ZAXKEROTH-OS.sh
export ZAXKEROTH_OS_BIN="\$HOME/.apt/opt/ZAXKEROTH/$BIN"
export ZAXKEROTH_OS_SHIM="\$HOME/.apt/usr/bin/$SHIM"
<<EOF
