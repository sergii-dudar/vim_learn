set number relativenumber
noremap <Up> <Nop>
noremap <Down> <Nop>
noremap <Left> <Nop>
noremap <Right> <Nop>

vnoremap . :norm! .<CR>

nnoremap <SPACE> <Nop>
let mapleader = " "

" In insert or command mode, move normally by using Ctrl
"inoremap <C-h> <Left>
"inoremap <C-j> <Down>
"inoremap <C-k> <Up>
"inoremap <C-l> <Right>
"cnoremap <C-h> <Left>
"cnoremap <C-j> <Down>
"cnoremap <C-k> <Up>
"cnoremap <C-l> <Right>

"" provide hjkl movements in Insert mode via the <Alt> modifier key
"inoremap <A-h> <C-o>h
"inoremap <A-j> <C-o>j
"inoremap <A-k> <C-o>k
"inoremap <A-l> <C-o>l
"inoremap <A-b> <C-o>b
"inoremap <A-w> <C-o>w

"" provide hjkl movements in Command-line mode via the <Alt> modifier key
"cnoremap <A-h> <Left>
"cnoremap <A-j> <Down>
"cnoremap <A-k> <Up>
"cnoremap <A-l> <Right>
