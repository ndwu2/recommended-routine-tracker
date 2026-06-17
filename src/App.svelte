<script>
  const ROUTINE_URL =
    'https://www.reddit.com/r/bodyweightfitness/wiki/kb/recommended_routine/';

  // Sections of the Recommended Routine. Each exercise toggles "done" (green) on tap.
  const sections = [
    { title: 'Warm-Up', items: ['Warm-Up'] },
    { title: 'First Pair', items: ['Pull-up Progression', 'Squat Progression'] },
    { title: 'Second Pair', items: ['Dip Progression', 'Hinge Progression'] },
    { title: 'Third Pair', items: ['Row Progression', 'Push-up Progression'] },
    {
      title: 'Core Triplet',
      items: [
        'Anti-Extension Progression',
        'Anti-Rotation Progression',
        'Extension Progression',
      ],
    },
  ];

  // Tracks completion per exercise, keyed by "sectionIndex-itemIndex".
  let done = $state({});

  function toggle(key) {
    done[key] = !done[key];
  }
</script>

<main>
  <header>
    <h1>Recommended Routine</h1>
    <a href={ROUTINE_URL} target="_blank" rel="noopener noreferrer">
      View the full routine ↗
    </a>
  </header>

  {#each sections as section, s}
    <section>
      <h2>{section.title}</h2>
      <div class="buttons">
        {#each section.items as item, i}
          {@const key = `${s}-${i}`}
          <button
            class:done={done[key]}
            aria-pressed={done[key] ?? false}
            onclick={() => toggle(key)}
          >
            {item}
          </button>
        {/each}
      </div>
    </section>
  {/each}
</main>

<style>
  main {
    max-width: 480px;
    margin: 0 auto;
    padding: 1.25rem 1rem calc(2rem + env(safe-area-inset-bottom));
  }

  header {
    text-align: center;
    margin-bottom: 1.5rem;
  }

  h1 {
    font-size: 1.5rem;
    margin: 0 0 0.25rem;
  }

  header a {
    color: #4ea1ff;
    text-decoration: none;
    font-size: 0.95rem;
  }

  section {
    margin-bottom: 1.5rem;
  }

  h2 {
    font-size: 1.05rem;
    margin: 0 0 0.6rem;
    color: #b8b8b8;
    text-transform: uppercase;
    letter-spacing: 0.04em;
  }

  .buttons {
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
  }

  button {
    width: 100%;
    padding: 1rem;
    font-size: 1rem;
    font-weight: 600;
    color: #f0f0f0;
    background: #2c2c2c;
    border: 2px solid #3d3d3d;
    border-radius: 12px;
    cursor: pointer;
    transition: background 0.15s, border-color 0.15s, transform 0.05s;
    -webkit-tap-highlight-color: transparent;
  }

  button:active {
    transform: scale(0.98);
  }

  button.done {
    background: #1f7a3d;
    border-color: #2ea84f;
  }
</style>
