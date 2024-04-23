- Snap Sandboxing: Snap packages are sandboxed environments, meaning they have restricted 
    access to the system and resources. This prevents them from modifying system-wide 
    locations where launcher scripts are typically placed (e.g., /usr/local/bin).

- Snap-provided Launcher: When you install IntelliJ IDEA via Snap, it comes with its own 
      built-in launcher script named  intellij-idea-community (or intellij-idea-ultimate depending on the version).
      This script is located within the Snap itself and is accessible through the terminal.

Use the Snap-provided Launcher:
    Bash:
        intellij-idea-community  # For Community Edition
        intellij-idea-ultimate   # For Ultimate Edition