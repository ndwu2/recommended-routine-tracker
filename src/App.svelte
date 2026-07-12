<script>
  import stopwatchIcon from './assets/stopwatch.svg';
  import cooldownIcon from './assets/timer.svg';

  const ROUTINE_URL =
    'https://www.reddit.com/r/bodyweightfitness/wiki/kb/recommended_routine/';

  // Sections of the Recommended Routine. Each exercise toggles "done" (green) on tap.
  const sections = [
    { title: 'Warm-Up', items: ['Warm-Up'] },
    { title: 'First Pair', items: ['Pull-Up Progression', 'Squat Progression'] },
    { title: 'Second Pair', items: ['Dip Progression', 'Hinge Progression'] },
    { title: 'Third Pair', items: ['Row Progression', 'Push-Up Progression'] },
    {
      title: 'Core Triplet',
      items: [
        'Anti-Extension Progression',
        'Anti-Rotation Progression',
        'Extension Progression',
      ],
    },
  ];

  // Workout details per item, keyed by item name. Each row is { reps, name, link }.
  // Items without an entry here have no expandable table.
  const workouts = {
    'Warm-Up': [
      {
        reps: '5-10',
        name: "Yuri's Shoulder Band Warmup",
        link: 'https://www.youtube.com/watch?v=Vwn5hSf3WEg',
      },
      {
        reps: '5-10',
        name: 'Squat Sky Reaches',
        link: 'https://www.youtube.com/watch?v=lbozu0DPcYI&t=42s',
      },
      {
        reps: '10+',
        name: 'GMB Wrist Prep',
        link: 'https://www.youtube.com/watch?v=mSZWSQSSEjE',
      },
      {
        reps: '30s',
        name: 'Deadbugs',
        link: 'https://nick-e.com/deadbug/',
      },
      {
        reps: '10',
        name: 'Arch Hangs',
        link: 'https://youtube.com/watch?t=7s&v=C995b3KLXS4&feature=youtu.be',
      },
      {
        reps: '30s',
        name: 'Support Hold',
        link: null,
      },
      {
        reps: '10',
        name: 'Easier Squat Progression',
        link: null,
      },
      {
        reps: '10',
        name: 'Easier Hinge Progression',
        link: null,
      },
    ],
    'Pull-Up Progression': [
      {
        reps: '5-8',
        name: 'Scapular Pulls',
        link: 'https://www.youtube.com/watch?v=FgYoc4O-cio&t=81s',
      },
      {
        reps: '5-8',
        name: 'Arch Hangs',
        link: 'https://www.youtube.com/watch?v=C995b3KLXS4&t=7s',
      },
      {
        reps: '5-8',
        name: 'Pull-Up Negatives',
        link: 'https://www.youtube.com/watch?v=EkpJkHpJXmM',
      },
      {
        reps: '5-8',
        name: 'Pull-Ups',
        link: 'https://www.youtube.com/watch?v=eGo4IYlbE5g',
      },
      {
        reps: '5-8',
        name: 'Arch Body Pull-Ups',
        link: 'https://imgur.com/y0k59F8',
      },
      {
        reps: '5-8',
        name: 'L-Sit Pull-Ups',
        link: 'https://www.youtube.com/watch?v=qeGS55RHBUU',
      },
      {
        reps: '5-8',
        name: 'Weighted Pull-Ups',
        link: null,
      },
      {
        reps: '5-8',
        name: 'Type-Writer Pull-Ups',
        link: 'https://www.youtube.com/watch?v=dvd5Fyl-Ves',
      },
      {
        reps: '5-8',
        name: 'Archer Pull-Ups',
        link: 'https://www.youtube.com/watch?v=dvd5Fyl-Ves',
      },
    ],
    'Squat Progression': [
      {
        reps: '5-8',
        name: 'Assisted Squat',
        link: 'https://www.youtube.com/watch?v=OuR_Fp7AB0c',
      },
      {
        reps: '5-8',
        name: 'Squat',
        link: 'https://www.youtube.com/watch?v=zJBLDJMJiDE',
      },
      {
        reps: '5-8',
        name: 'Split Squat',
        link: null,
      },
      {
        reps: '5-8',
        name: 'Bulgarian Split Squat',
        link: 'https://www.youtube.com/watch?v=kkdmHTASZg8&t=75s',
      },
      {
        reps: '5-8',
        name: 'Beginner Shrimp Squat',
        link: 'https://www.youtube.com/watch?v=TKt0-c83GSc',
      },
      {
        reps: '5-8',
        name: 'Intermediate Shrimp Squat',
        link: 'https://www.youtube.com/watch?v=TKt0-c83GSc',
      },
      {
        reps: '5-8',
        name: 'Advanced Shrimp Squat',
        link: 'https://www.youtube.com/watch?v=TKt0-c83GSc',
      },
      {
        reps: '5-8',
        name: 'Weighted Shrimp Squat',
        link: null,
      },
      {
        reps: '5-8',
        name: 'Step-Ups',
        link: 'https://www.youtube.com/watch?v=487aR3A7HvM',
      },
      {
        reps: '5-8',
        name: 'Deep Step-Ups',
        link: 'https://imgur.com/deep-step-up-Ga6RHLE',
      },
      {
        reps: '5-8',
        name: 'Partial ROM Pistol Squat',
        link: 'https://www.youtube.com/watch?v=0SN8ZaxOBpA',
      },
      {
        reps: '5-8',
        name: 'Pistol Squat',
        link: 'https://www.youtube.com/watch?v=0SN8ZaxOBpA',
      },
    ],
    'Dip Progression': [
      {
        reps: '5-8',
        name: 'Parallel Bar Support Hold',
        link: 'https://antranik.org/wp-content/uploads/2014/01/antranik-holding-support-hold-on-parallel-bars.jpg',
      },
      {
        reps: '5-8',
        name: 'Negative Dips',
        link: 'https://www.youtube.com/watch?v=T3Scqw1BbCc',
      },
      {
        reps: '5-8',
        name: 'Parallel Bar Dips',
        link: 'https://www.youtube.com/watch?v=2z8JmcrW-As',
      },
      {
        reps: '5-8',
        name: 'Weighted Dips',
        link: null,
      },
      {
        reps: '5-8',
        name: 'Ring Dips',
        link: 'https://www.youtube.com/watch?v=2Vymm8nH4wM',
      },
      {
        reps: '5-8',
        name: 'Rings RTO Dips',
        link: 'https://www.youtube.com/watch?v=WGbtrkzIiOA&t=60s',
      },
      {
        reps: '5-8',
        name: 'HSPU',
        link: 'https://www.reddit.com/r/bodyweightfitness/wiki/exercises/hspu/',
      },
    ],
    'Hinge Progression': [
      {
        reps: '5-8',
        name: 'Romanian Deadlift',
        link: null,
      },
      {
        reps: '5-8',
        name: 'Single Legged Deadlift',
        link: 'https://www.youtube.com/watch?v=iDV8r5u6En0',
      },
      {
        reps: '5-8',
        name: 'Banded Nordic Curl Negatives',
        link: 'https://www.youtube.com/watch?v=HUXS3S2xSX4',
      },
      {
        reps: '5-8',
        name: 'Banded Nordic Curl',
        link: 'https://www.youtube.com/watch?v=HUXS3S2xSX4',
      },
      {
        reps: '5-8',
        name: 'Nordic Curl',
        link: 'https://www.youtube.com/watch?v=d8AAPcYxPo8',
      },
      {
        reps: '5-8',
        name: 'Negative Hamstring Slide',
        link: 'https://www.youtube.com/watch?v=OY8Jci5KJdM',
      },
      {
        reps: '5-8',
        name: 'Hamstring Slide',
        link: 'https://www.youtube.com/watch?v=Dlazt593cuA',
      },
      {
        reps: '5-8',
        name: 'Eccentric Single Leg Sliding Hamstring Slide',
        link: 'https://www.youtube.com/watch?v=dE5d39sErBU',
      },
      {
        reps: '5-8',
        name: 'Single Leg Sliding Hamstring Slide',
        link: 'https://www.youtube.com/watch?v=PzAtOaY1-Dk',
      },
      {
        reps: '5-8',
        name: 'Harop Curl',
        link: 'https://www.youtube.com/watch?v=Y7ndeehIOhU',
      },
      {
        reps: '5-8',
        name: 'Glute Ham Raise',
        link: 'https://www.youtube.com/watch?v=8w6nkNnE3-M',
      },
    ],
    'Row Progression': [
      {
        reps: '5-8',
        name: 'Vertical Rows',
        link: 'https://www.youtube.com/watch?v=wr8ZA-cvH3s',
      },
      {
        reps: '5-8',
        name: 'Incline Rows',
        link: 'https://www.youtube.com/watch?v=LR2EnFWpVao',
      },
      {
        reps: '5-8',
        name: 'Horizontal Rows',
        link: 'https://www.youtube.com/watch?v=dvkIaarnf0g',
      },
      {
        reps: '5-8',
        name: 'Wide Rows',
        link: 'https://www.youtube.com/watch?v=f3yfJ0RStQw',
      },
      {
        reps: '5-8',
        name: 'Weighted Inverted Rows',
        link: 'https://www.youtube.com/watch?v=3cYR6pis5zc',
      },
      {
        reps: '10-30s',
        name: 'Tuck Front Lever',
        link: 'https://www.youtube.com/watch?v=tStwC06qdwM&t=170s',
      },
      {
        reps: '5-8',
        name: 'Tuck Front Lever Pulls',
        link: 'https://www.youtube.com/watch?v=ZWxrvwRKR-s&t=259s',
      },
      {
        reps: '5-8',
        name: 'Archer Rows',
        link: 'https://www.youtube.com/watch?v=PGoW1i4K_o0',
      },
      {
        reps: '5-8',
        name: 'One Arm Rows',
        link: 'https://www.youtube.com/watch?v=67Lp_DeX3-c',
      },
    ],
    'Push-Up Progression': [
      {
        reps: '5-8',
        name: 'Vertical Push-Up',
        link: null,
      },
      {
        reps: '5-8',
        name: 'Incline Push-Up',
        link: 'https://www.youtube.com/watch?v=NnfAYkBRDPY',
      },
      {
        reps: '5-8',
        name: 'Full Push-Up',
        link: 'https://www.youtube.com/watch?v=IODxDxX7oi4',
      },
      {
        reps: '5-8',
        name: 'Diamond Push-Up',
        link: 'https://www.youtube.com/watch?v=J0DnG1_S92I',
      },
      {
        reps: '5-8',
        name: 'Pseudo Planche Push-Up',
        link: 'https://www.youtube.com/watch?v=Cdmg0CfMZeo',
      },
      {
        reps: '5-8',
        name: 'Rings Push-Up',
        link: 'https://www.youtube.com/watch?v=vBviFvN3rHw',
      },
      {
        reps: '5-8',
        name: 'RTO Push-Up',
        link: 'https://youtube.com/watch?v=MrlyEIpe0LI&t=2m55s',
      },
      {
        reps: '5-8',
        name: 'HSPU',
        link: 'https://www.reddit.com/r/bodyweightfitness/wiki/exercises/hspu/',
      },
    ],
    'Anti-Extension Progression': [
      {
        reps: '30s',
        name: 'Plank',
        link: 'https://www.youtube.com/watch?v=kL_NJAkCQBg',
      },
      {
        reps: '8-12',
        name: 'Ring Ab Rollouts',
        link: 'https://www.youtube.com/watch?v=LBUfnmugKLw',
      },
      {
        reps: '8-12',
        name: 'Kneeling Ab Wheel Rollouts',
        link: 'https://www.youtube.com/watch?v=uYBOBBv9GzY',
      },
      {
        reps: '8-12',
        name: 'Standing Ab Wheel Rollouts',
        link: 'https://www.youtube.com/watch?v=uYBOBBv9GzY',
      },
      {
        reps: '8-12',
        name: 'Tucked Hanging Leg Raises',
        link: 'https://www.youtube.com/watch?v=Gw3RyyARhBQ',
      },
      {
        reps: '8-12',
        name: 'Pike Hanging Leg Raises Negative',
        link: null,
      },
      {
        reps: '8-12',
        name: 'Straight Hanging Leg Raises',
        link: 'https://www.youtube.com/watch?v=QyVq5oUBpss',
      },
      {
        reps: '8-12',
        name: 'Pike Compressions',
        link: 'https://youtube.com/watch?t=251&v=G1_EoDs-G7E&feature=youtu.be',
      },
    ],
    'Anti-Rotation Progression': [
      {
        reps: '8-12',
        name: 'Assisted Knee Copenhagen Plank',
        link: 'https://imgur.com/6vOLzTC',
      },
      {
        reps: '8-12',
        name: 'Knee Copenhagen Plank',
        link: 'https://imgur.com/OeX4Vp8',
      },
      {
        reps: '8-12',
        name: 'Assisted Copenhagen Plank',
        link: 'https://imgur.com/AnG77AG',
      },
      {
        reps: '8-12',
        name: 'Copenhagen Plank',
        link: 'https://imgur.com/zym6TYb',
      },
      {
        reps: '8-12',
        name: 'Copenhagen Plank with Movement',
        link: 'https://www.youtube.com/watch?v=1NNqUQvMYGc',
      },
      {
        reps: '8-12',
        name: 'Ring Pallof Press',
        link: 'https://www.youtube.com/watch?v=YSN3rqhYlKU',
      },
    ],
    'Extension Progression': [
      {
        reps: '8-12',
        name: 'Reverse Hyperextension',
        link: 'https://www.youtube.com/watch?v=ZeRsNzFcQLQ',
      },
      {
        reps: '8-12',
        name: 'Arch Raises',
        link: 'https://www.youtube.com/watch?v=OgyqYuh41Mw&t=220s',
      },
      {
        reps: '8-12',
        name: 'Arch Body Hold',
        link: 'https://www.youtube.com/watch?v=OgyqYuh41Mw',
      },
      {
        reps: '8-12',
        name: 'Arch Body Rocks',
        link: 'https://www.youtube.com/watch?v=FazlcjNXMwA',
      },
      {
        reps: '8-12',
        name: 'Hyper Extension',
        link: 'https://www.youtube.com/watch?v=ph3pddpKzzw',
      },
    ],
  };

  // Tracks completion per exercise, keyed by "sectionIndex-itemIndex".
  let done = $state({});

  // Tracks which workout tables are expanded, keyed the same way.
  let open = $state({});

  function toggle(key) {
    done[key] = !done[key];
  }

  function toggleOpen(key) {
    open[key] = !open[key];
  }

  function reset() {
    done = {};
  }

  // --- Timer widget: stopwatch (counts up) and cooldown (counts down) ---
  const DEFAULT_COOLDOWN_MS = 90_000; // 1 min 30 sec

  let timerMode = $state('stopwatch'); // 'stopwatch' | 'cooldown'
  let running = $state(false);
  let stopwatchMs = $state(0);
  let cooldownDuration = $state(DEFAULT_COOLDOWN_MS);
  let cooldownMs = $state(DEFAULT_COOLDOWN_MS);

  let lastTick = 0;

  const display = $derived(
    formatTime(timerMode === 'stopwatch' ? stopwatchMs : cooldownMs)
  );
  const finished = $derived(timerMode === 'cooldown' && cooldownMs === 0);

  function formatTime(ms) {
    const totalTenths = Math.floor(ms / 100);
    const tenths = totalTenths % 10;
    const totalSeconds = Math.floor(totalTenths / 10);
    const seconds = totalSeconds % 60;
    const minutes = Math.floor(totalSeconds / 60);
    return `${minutes}:${String(seconds).padStart(2, '0')}.${tenths}`;
  }

  function tick() {
    const now = performance.now();
    const dt = now - lastTick;
    lastTick = now;
    if (timerMode === 'stopwatch') {
      stopwatchMs += dt;
    } else {
      cooldownMs = Math.max(0, cooldownMs - dt);
      if (cooldownMs === 0) running = false;
    }
  }

  // Runs the ticking interval only while `running` is true; cleans up on stop/unmount.
  $effect(() => {
    if (!running) return;
    lastTick = performance.now();
    const id = setInterval(tick, 100);
    return () => clearInterval(id);
  });

  function startPause() {
    // Restart a finished cooldown from its full duration.
    if (timerMode === 'cooldown' && cooldownMs === 0) {
      cooldownMs = cooldownDuration;
    }
    running = !running;
  }

  function resetTimer() {
    running = false;
    if (timerMode === 'stopwatch') stopwatchMs = 0;
    else cooldownMs = cooldownDuration;
  }

  function setTimerMode(mode) {
    if (timerMode === mode) return;
    timerMode = mode;
    running = false;
  }

  function adjustCooldown(deltaMs) {
    cooldownDuration = Math.max(15_000, cooldownDuration + deltaMs);
    if (!running) cooldownMs = cooldownDuration;
  }
</script>

<main>
  <header>
    <h1>Recommended Routine</h1>
    <a href={ROUTINE_URL} target="_blank" rel="noopener noreferrer">
      View the full routine ↗
    </a>
  </header>

  <div class="timer">
    <div class="timer-modes">
      <button
        class="mode"
        class:active={timerMode === 'stopwatch'}
        aria-pressed={timerMode === 'stopwatch'}
        onclick={() => setTimerMode('stopwatch')}
      >
        <img src={stopwatchIcon} alt="Stopwatch" />
      </button>
      <button
        class="mode"
        class:active={timerMode === 'cooldown'}
        aria-pressed={timerMode === 'cooldown'}
        onclick={() => setTimerMode('cooldown')}
      >
        <img src={cooldownIcon} alt="Cooldown timer" />
      </button>
    </div>

    <div class="timer-face">
      <div class="time" class:finished>{display}</div>
      <div class="timer-controls">
        {#if timerMode === 'cooldown'}
          <button
            class="adjust"
            aria-label="Decrease cooldown by 15 seconds"
            onclick={() => adjustCooldown(-15_000)}
          >
            −15s
          </button>
        {/if}
        <button class="run" onclick={startPause}>
          {running ? 'Pause' : 'Start'}
        </button>
        <button class="run reset-timer" onclick={resetTimer}>Reset</button>
        {#if timerMode === 'cooldown'}
          <button
            class="adjust"
            aria-label="Increase cooldown by 15 seconds"
            onclick={() => adjustCooldown(15_000)}
          >
            +15s
          </button>
        {/if}
      </div>
    </div>
  </div>

  {#each sections as section, s}
    <section>
      <h2>{section.title}</h2>
      <div class="buttons">
        {#each section.items as item, i}
          {@const key = `${s}-${i}`}
          {@const rows = workouts[item]}
          <div class="item" class:open={open[key]}>
            <div class="item-main">
              <button
                class="track"
                class:done={done[key]}
                aria-pressed={done[key] ?? false}
                onclick={() => toggle(key)}
              >
                {item}
              </button>
              {#if rows}
                <button
                  class="disclosure"
                  aria-expanded={open[key] ?? false}
                  aria-label={`${open[key] ? 'Hide' : 'Show'} ${item} exercises`}
                  onclick={() => toggleOpen(key)}
                >
                  <span class="caret">▸</span>
                </button>
              {/if}
            </div>

            {#if rows && open[key]}
              <div class="workout">
                <table>
                  <thead>
                    <tr>
                      <th class="reps-col">Reps</th>
                      <th>Exercise</th>
                    </tr>
                  </thead>
                  <tbody>
                    {#each rows as row}
                      <tr>
                        <td class="reps">{row.reps}</td>
                        <td>
                          {#if row.link}
                            <a
                              href={row.link}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {row.name}
                            </a>
                          {:else}
                            {row.name}
                          {/if}
                        </td>
                      </tr>
                    {/each}
                  </tbody>
                </table>
              </div>
            {/if}
          </div>
        {/each}
      </div>
    </section>
  {/each}

  <button class="reset" onclick={reset}>Reset</button>
</main>

<style>
  main {
    max-width: 560px;
    margin: 0 auto;
    padding: 1.25rem 1rem calc(2rem + env(safe-area-inset-bottom));
  }

  .timer {
    display: flex;
    align-items: stretch;
    gap: 0.6rem;
    background: #fdfdfd;
    color: #191919;
    border-radius: 12px;
    padding: 0.6rem;
    margin-bottom: 1.5rem;
  }

  .timer-modes {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
    flex: 0 0 auto;
  }

  .timer .mode {
    width: auto;
    padding: 0.5rem 0.8rem;
    font-size: 0.85rem;
    font-weight: 600;
    color: #191919;
    background: #fdfdfd;
    border: 2px solid #d4d4d4;
    border-radius: 8px;
  }

  .timer .mode.active {
    color: #fdfdfd;
    background: #191919;
    border-color: #191919;
  }

  .timer .mode img {
    display: block;
    width: 24px;
    height: 24px;
    margin: 0 auto;
  }

  /* Icons are solid black; flip to white on the dark active button. */
  .timer .mode.active img {
    filter: invert(1);
  }

  .timer-face {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
  }

  .timer .time {
    font-size: 2.2rem;
    font-weight: 700;
    font-variant-numeric: tabular-nums;
    letter-spacing: 0.02em;
    color: #191919;
    line-height: 1;
  }

  .timer .time.finished {
    color: #c0392b;
  }

  .timer-controls {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    flex-wrap: wrap;
    justify-content: center;
  }

  .timer .run,
  .timer .adjust {
    width: auto;
    padding: 0.45rem 0.9rem;
    font-size: 0.9rem;
    font-weight: 600;
    color: #fdfdfd;
    background: #191919;
    border: 2px solid #191919;
    border-radius: 8px;
  }

  .timer .run.reset-timer {
    color: #191919;
    background: #fdfdfd;
    border-color: #cfcfcf;
  }

  .timer .adjust {
    padding: 0.45rem 0.6rem;
    font-size: 0.8rem;
    color: #191919;
    background: #fdfdfd;
    border-color: #d4d4d4;
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
    color: var(--link);
    text-decoration: none;
    font-size: 0.95rem;
  }

  section {
    margin-bottom: 1.5rem;
  }

  h2 {
    font-size: 1.05rem;
    margin: 0 0 0.6rem;
    color: var(--text);
    text-transform: uppercase;
    letter-spacing: 0.04em;
  }

  .buttons {
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
  }

  .item {
    display: flex;
    align-items: flex-start;
    gap: 0.6rem;
    flex-wrap: wrap;
  }

  .item-main {
    display: flex;
    align-items: stretch;
    gap: 0.4rem;
    flex: 1 1 200px;
  }

  button {
    width: 100%;
    padding: 1rem;
    font-size: 1rem;
    font-weight: 600;
    color: var(--btn-text);
    background: var(--btn);
    border: 2px solid var(--btn);
    border-radius: 12px;
    cursor: pointer;
    transition: background 0.15s, border-color 0.15s, transform 0.05s;
    -webkit-tap-highlight-color: transparent;
  }

  button:active {
    transform: scale(0.98);
  }

  button.done {
    background: var(--done);
    border-color: var(--done);
  }

  .track {
    flex: 1;
    width: auto;
  }

  .disclosure {
    width: auto;
    flex: 0 0 auto;
    padding: 0 0.9rem;
    color: var(--btn-text);
  }

  .caret {
    display: inline-block;
    transition: transform 0.15s;
  }

  .item.open .caret {
    transform: rotate(90deg);
  }

  .workout {
    flex: 1 1 260px;
    background: var(--btn);
    color: var(--btn-text);
    border: 1px solid var(--table-border);
    border-radius: 10px;
    overflow: hidden;
  }

  .workout table {
    width: 100%;
    border-collapse: collapse;
    font-size: 0.9rem;
  }

  .workout th,
  .workout td {
    text-align: left;
    padding: 0.5rem 0.7rem;
    border-bottom: 1px solid var(--table-border);
  }

  .workout tr:last-child td {
    border-bottom: none;
  }

  .workout th {
    font-size: 0.72rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.04em;
    color: var(--table-muted);
    background: var(--table-header-bg);
  }

  .workout .reps-col {
    width: 1%;
    white-space: nowrap;
  }

  .workout .reps {
    color: var(--table-muted);
    white-space: nowrap;
    font-variant-numeric: tabular-nums;
  }

  .workout a {
    color: var(--link);
    text-decoration: none;
  }

  .workout a:active {
    text-decoration: underline;
  }

  button.reset {
    margin-top: 0.5rem;
    font-size: 0.95rem;
    font-weight: 500;
    color: var(--btn-text);
    background: var(--reset-btn);
    border-color: var(--reset-btn);
  }

  button.reset:active {
    background: var(--reset-active);
  }
</style>
