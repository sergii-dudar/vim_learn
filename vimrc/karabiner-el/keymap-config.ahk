#Requires AutoHotkey v2.0

; VIM
Capslock::Ctrl
^i::Esc

^h::Left
^j::Down
^k::Up
^l::Right

; MAC option and command position mapping
LWin::LAlt
LAlt::Ctrl

; change language by right alt
RAlt Up::Send "{LAlt down}{LShift down}{LShift up}{LAlt up}"
