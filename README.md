<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Maxi Capital</title>

  <script src="https://cdn.tailwindcss.com"></script>

  <style>
    body{
      background:#050505;
      color:white;
      font-family: Arial, Helvetica, sans-serif;
      overflow-x:hidden;
    }

    .gold{
      color:#d4af37;
    }

    .glass{
      background: rgba(255,255,255,0.05);
      backdrop-filter: blur(10px);
      border:1px solid rgba(255,255,255,0.08);
    }

    .hero-bg{
      background:
      radial-gradient(circle at top right, rgba(212,175,55,0.15), transparent 30%),
      radial-gradient(circle at bottom left, rgba(255,255,255,0.06), transparent 25%);
    }

    .btn-gold{
      background:#d4af37;
      color:black;
      transition:0.3s;
    }

    .btn-gold:hover{
      transform:translateY(-2px);
      opacity:0.9;
    }
  </style>
</head>
<body>

  <!-- NAVBAR -->
  <nav class="flex items-center justify-between px-8 py-6 border-b border-white/10">
    <h1 class="text-2xl font-bold tracking-wider">
      MAXI <span class="gold">CAPITAL</span>
    </h1>

    <div class="hidden md:flex gap-8 text-sm">
      <a href="#" class="hover:text-yellow-400">Home</a>
      <a href="#" class="hover:text-yellow-400">Challenges</a>
      <a href="#" class="hover:text-yellow-400">Payouts</a>
      <a href="#" class="hover:text-yellow-400">FAQ</a>
      <a href="#" class="hover:text-yellow-400">Contact</a>
    </div>

    <button class="btn-gold px-5 py-2 rounded-xl font-semibold">
      Start Challenge
    </button>
  </nav>

  <!-- HERO -->
  <section class="hero-bg min-h-screen flex items-center px-8 lg:px-20">

    <div class="grid lg:grid-cols-2 gap-16 items-center w-full">

      <!-- LEFT -->
      <div>
        <p class="gold uppercase tracking-[4px] mb-4 text-sm">
          Funded Trading Program
        </p>

        <h1 class="text-5xl lg:text-7xl font-bold leading-tight">
          Trade Bigger. <br>
          Scale Faster.
        </h1>

        <p class="text-gray-400 mt-8 text-lg max-w-xl leading-relaxed">
          Maxi Capital gives disciplined traders access to funded accounts,
          scaling opportunities, and fast payouts built for serious performance.
        </p>

        <div class="flex gap-5 mt-10 flex-wrap">
          <button class="btn-gold px-8 py-4 rounded-2xl font-bold">
            Get Funded
          </button>

          <button class="glass px-8 py-4 rounded-2xl font-semibold">
            Learn More
          </button>
        </div>

        <!-- STATS -->
        <div class="grid grid-cols-3 gap-5 mt-14">

          <div class="glass p-5 rounded-2xl">
            <h2 class="text-2xl font-bold gold">$5M+</h2>
            <p class="text-gray-400 text-sm mt-1">
              Paid to Traders
            </p>
          </div>

          <div class="glass p-5 rounded-2xl">
            <h2 class="text-2xl font-bold gold">24H</h2>
            <p class="text-gray-400 text-sm mt-1">
              Fast Payouts
            </p>
          </div>

          <div class="glass p-5 rounded-2xl">
            <h2 class="text-2xl font-bold gold">100K</h2>
            <p class="text-gray-400 text-sm mt-1">
              Max Funding
            </p>
          </div>

        </div>
      </div>

      <!-- RIGHT -->
      <div class="glass p-8 rounded-3xl">

        <div class="flex justify-between items-center mb-8">
          <h2 class="text-2xl font-bold">
            Trader Dashboard
          </h2>

          <span class="bg-green-500/20 text-green-400 px-4 py-1 rounded-full text-sm">
            Live
          </span>
        </div>

        <!-- CHART MOCKUP -->
        <div class="h-64 rounded-2xl bg-gradient-to-b from-yellow-500/10 to-transparent border border-yellow-500/20 flex items-end p-4 gap-3">

          <div class="bg-yellow-400 w-6 h-20 rounded-t-lg"></div>
          <div class="bg-yellow-400 w-6 h-28 rounded-t-lg"></div>
          <div class="bg-yellow-400 w-6 h-16 rounded-t-lg"></div>
          <div class="bg-yellow-400 w-6 h-36 rounded-t-lg"></div>
          <div class="bg-yellow-400 w-6 h-44 rounded-t-lg"></div>
          <div class="bg-yellow-400 w-6 h-32 rounded-t-lg"></div>
          <div class="bg-yellow-400 w-6 h-52 rounded-t-lg"></div>

        </div>

        <!-- ACCOUNT INFO -->
        <div class="grid grid-cols-2 gap-5 mt-8">

          <div class="glass p-5 rounded-2xl">
            <p class="text-gray-400 text-sm">Account Size</p>
            <h3 class="text-3xl font-bold mt-2">
              $100,000
            </h3>
          </div>

          <div class="glass p-5 rounded-2xl">
            <p class="text-gray-400 text-sm">Profit Split</p>
            <h3 class="text-3xl font-bold mt-2 gold">
              90%
            </h3>
          </div>

        </div>

      </div>

    </div>

  </section>

  <!-- FUNDING PLANS -->
  <section class="px-8 lg:px-20 py-20">

    <div class="text-center mb-14">
      <p class="gold uppercase tracking-[4px] text-sm">
        Funding Programs
      </p>

      <h2 class="text-4xl font-bold mt-4">
        Choose Your Challenge
      </h2>
    </div>

    <div class="grid md:grid-cols-3 gap-8">

      <!-- CARD -->
      <div class="glass p-8 rounded-3xl">
        <h3 class="text-3xl font-bold">$10K</h3>

        <p class="text-gray-400 mt-3">
          Perfect for developing traders.
        </p>

        <h4 class="gold text-4xl font-bold mt-8">
          $99
        </h4>

        <button class="btn-gold w-full mt-8 py-4 rounded-2xl font-bold">
          Start Now
        </button>
      </div>

      <!-- CARD -->
      <div class="glass p-8 rounded-3xl border border-yellow-500/40">
        <h3 class="text-3xl font-bold">$50K</h3>

        <p class="text-gray-400 mt-3">
          Scale your trading capital faster.
        </p>

        <h4 class="gold text-4xl font-bold mt-8">
          $299
        </h4>

        <button class="btn-gold w-full mt-8 py-4 rounded-2xl font-bold">
          Start Now
        </button>
      </div>

      <!-- CARD -->
      <div class="glass p-8 rounded-3xl">
        <h3 class="text-3xl font-bold">$100K</h3>

        <p class="text-gray-400 mt-3">
          Built for elite funded traders.
        </p>

        <h4 class="gold text-4xl font-bold mt-8">
          $499
        </h4>

        <button class="btn-gold w-full mt-8 py-4 rounded-2xl font-bold">
          Start Now
        </button>
      </div>

    </div>

  </section>

  <!-- FOOTER -->
  <footer class="border-t border-white/10 py-10 px-8 lg:px-20 text-center text-gray-500">
    © 2026 Maxi Capital. All Rights Reserved.
  </footer>

</body>
</html>
