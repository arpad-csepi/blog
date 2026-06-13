{ pkgs ? import <nixpkgs> {} }:

pkgs.mkShell {
  buildInputs = [
    pkgs.deno
  ];

  shellHook = ''
    deno install
  '';
}
