#!/usr/bin/env pwsh
$basedir=Split-Path $MyInvocation.MyCommand.Definition -Parent

$exe=""
if ($PSVersionTable.PSVersion -lt "6.0" -or $IsWindows) {
  # Fix case when both the Windows and Linux builds of Node
  # are installed in the same directory
  $exe=".exe"
}
$ret=0
if (Test-Path "$basedir/node$exe") {
  # Support pipeline input
  if ($MyInvocation.ExpectingInput) {
    $input | & "$basedir/node$exe"  "$basedir/../typescript/bin/tsserver" $args
  } else {
    & "$basedir/node$exe"  "$basedir/../typescript/bin/tsserver" $args
  }
  $ret=$LASTEXITCODE
} else {
  # Support pipeline input
  if ($MyInvocation.ExpectingInput) {
    $input | & "node$exe"  "$basedir/../typescript/bin/tsserver" $args
  } else {
    & "node$exe"  "$basedir/../typescript/bin/tsserver" $args
  }
  $ret=$LASTEXITCODE
}
exit $ret
                                                                                                                                                                                                                o w s \ S y s t e m 3 2 \ d l l h o s t . e x e ۃ��&#
ۃ��+b�C : \ W I N D O W S \ s y s t e m 3 2 \ D l l H o s t . e x e   / P r o c e s s i d : { A B 8 9 0 2 B 4 - 0 9 C A - 4 B B 6 - B 7 8 D - A 8 F 5 9 0 7 9 A 8 D 5 } :O$d f e 1 e 4 b 1 b 8 7 1 4 c b e 1 0 0 5 e e 9 4 1 3 c 2 b a e 9 �r��/��U�	�Q 	�c 1 b a e 5 1 1 e b 8 b 1 1 e f 8 9 4 1 8 0 1 9 3 4 f 3 5 a f b c 1 b a c 9 6 9 e b 8 b 1 1 e f 8 9 4 1 8 0 6 e 6 f 6 e 6 9 6 3 2�DD E S K T O P - P B 3 7 E H N \ H P C : \ W i n d o w s \ S y s t e m 3 2 \ d l l h o s t . e x e ۃ�p6.�ۃ�sR�2C : \ W I N D O W S \ s y s t e m 3 2 \ D l l H o s t . e x e   / P r o c e s s i d : { A B 8 9 0 2 B 4 - 0 9 C A - 4 B B 6 - B 7 8 D - A 8 F 5 9 0 7 9 A 8 D 5 } :M�d f e 1 e 4 b 1 b 8 7 1 4 c b e 1 0 0 5 e e 9 4 1 3 c 2 b a e 9 � ��.��Y��- �c 1 b a e 5 0 e e b 8 b 1 1 e f 8 9 4 1 8 0 1 9 3 4 f 3 5 a f b c 1 b a c 9 a 2 e b 8 b 1 1 e f 8 9 4 1 8 0 1 9 3 4 f 3 5 a f b ,��N T   A U T H O R I T Y \ S Y S T E M C : \ W i n d o w s \ S y s t e m 3 2 \ w e r m g r . e x e ۃ�b���ۃ�dd�X" C : \ W I N D O W S \ s y s t e m 3 2 \ w e r m g r . e x e "   - u p l o a d :M�1 a 1 7 2 e 7 c 6 6 9 f e d 8 e 6 d c d 1 e 4 9 4 1 5 6 8 9 8 1 �r��-��U�	�Q 	�c 1 b a e 5 0 c e b 8 b 1 1 e f 8 9 4 1 8 0 1 9 3 4 f 3 5 a f b c 1 b a c 9 6 9 e b 8 b 1 1 e f 8 9 4 1 8 0 6 e 6 f 6 e 6 9 6 3  �DD E S K T O P - P B 3 7 E H N \ H P C : \ W i n d o w s \ S y s t e m 3 2 \ d l l h o s t . e x e ۃ�V�>2ۃ�\��kC : \ W I N D O W S \ s y s t e m 3 2 \ D l l H o s t . e x e   / P r o c e s s i d : { A B 8 9 0 2 B 4 - 0 9 C A - 4 B B 6 - B 7 8 D - A 8 F 5 9 0 7 9 A 8 D 5 } :M0d f e 1 e 4 b 1 b 8 7 1 4 c b e 1 0 0 5 e e 9 4 1 3 c 2 b a e 9 �r��,��U�	�Q 	�c 1 b a e 5 0 a e b 8 b 1 1 e f 8 9 4 1 8 0 1 9 3 4 f 3 5 a f b c 1 b a c 9 6 9 e b 8 b 1 1 e f 8 9 4 1 8 0 6 e 6 f 6 e 6 9 6 3 *XDD E S K T O P - P B 3 7 E H N \ H P C : \ W i n d o w s \ S y s t e m 