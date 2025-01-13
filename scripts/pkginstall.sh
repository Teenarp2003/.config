
#!/bin/bash

# Check if pkglist.txt exists
if [[ ! -f "pkglist.txt" ]]; then
  echo "pkglist.txt not found!"
  exit 1
fi

# Read packages from pkglist.txt into an array
mapfile -t packages < pkglist.txt

# Array to hold valid packages
valid_packages=()

# Check each package
for pkg in "${packages[@]}"; do
  if pacman -Si "$pkg" > /dev/null 2>&1; then
    valid_packages+=("$pkg")
  else
    echo "Package '$pkg' not found in the pacman repository and will not be installed."
  fi
done

# Install valid packages
if [ ${#valid_packages[@]} -gt 0 ]; then
  echo "Installing valid packages: ${valid_packages[@]}"
  sudo pacman -S "${valid_packages[@]}"
else
  echo "No valid packages to install."
fi
