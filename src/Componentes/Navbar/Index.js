import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2>Dog Lovers</h2>
      <img src="/imagens/pata.svg" alt="" />
      <ul>
        <li><a href="/"><img src="/imagens/notificacoes.svg" alt="Notificações" /></a></li>
        <li><a href="/"><img src="/imagens/favoritos.svg" alt="Favoritos" /></a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
