
// exercises.js
    module.exports = [
        {
            id: "beginners",
            name: "Biceps Curl",
            need: "The bicep curl is an exercise that primarily targets the biceps brachii muscle.",
            suitable: "For individuals of all fitness levels",
            benefits: ["Bicep Development", "Forearm Engagement", "Joint Flexibility"],
            procedure: [
                "1. Stand with feet shoulder-width apart, holding a dumbbell in each hand, arms fully extended.",
                "2. Keep elbows close to your torso, exhale, and curl the weights while contracting your biceps.",
                "3. Inhale and slowly lower the weights back to the starting position."
            ],
            sets: "3 sets with 2min break",
            img: "https://global-uploads.webflow.com/5d1d0d3f53ced35a29dbe169/5f88bbddf6cbe9edf0eefcad_supinated-dumbbell-curl.png",
        },
        {
            id: "beginners",
            name: "Push-up",
            need: "Push-ups are a bodyweight exercise that targets the chest, shoulders, and triceps.",
            suitable: "For individuals of all fitness levels",
            benefits: ["Upper Body Strength", "Core Stability", "Improves Posture"],
            procedure: [
                "1. Start in a plank position with hands placed slightly wider than shoulder-width apart.",
                "2. Lower your body towards the ground by bending your elbows.",
                "3. Push back up to the starting position."
            ],
            sets: "3 sets of 15 reps",
            img: "https://www.inspireusafoundation.org/wp-content/uploads/2022/11/push-up.gif",
        },
        {
            id: "beginners",
            name: "Squats",
            need: "Squats target the muscles in the lower body, including the quadriceps and glutes.",
            suitable: "For individuals of all fitness levels",
            benefits: ["Leg Strength", "Improved Flexibility", "Core Activation"],
            procedure: [
                "1. Stand with feet shoulder-width apart.",
                "2. Lower your body by bending your knees and pushing your hips back.",
                "3. Keep your chest up and back straight, then return to the starting position."
            ],
            sets: "3 sets of 12 reps",
            img: "https://media.istockphoto.com/id/1284067703/vector/a-young-female-character-doing-squats-a-workout-scene-sport-outfit.jpg?s=2048x2048&w=is&k=20&c=EEsdNmOHkt1JpmtdqrkiQiI7O2TR04UI-LYmncklGGo=`",
        },
        {
            id: "beginners",
            name: "Plank",
            need: "The plank is a core exercise that engages multiple muscle groups.",
            suitable: "For individuals of all fitness levels",
            benefits: ["Core Stability", "Improved Posture", "Full Body Activation"],
            procedure: [
                "1. Start in a plank position with arms straight and shoulders directly over the wrists.",
                "2. Engage your core and maintain a straight line from head to heels.",
                "3. Hold the position for as long as possible."
            ],
            sets: "3 sets of 30 seconds",
            img: "https://www.mdpi.com/sensors/sensors-22-04510/article_deploy/html/images/sensors-22-04510-g001-550.jpg",
        },

        //TODO: left to feed data
        {
            id: "beginners",
            name: "Deadlifts",
            need: "Deadlifts target the muscles in the lower back, hamstrings, and glutes.",
            suitable: "For intermediate to advanced fitness levels",
            benefits: ["Full Body Strength", "Posterior Chain Activation", "Improved Grip Strength"],
            procedure: [
                "1. Stand with feet hip-width apart, holding a barbell in front of you.",
                "2. Bend at the hips and knees, keeping your back straight, and lower the barbell towards the ground.",
                "3. Engage your glutes and lift the barbell by straightening your hips and knees."
            ],
            sets: "3 sets of 10 reps",
            img: "https://www.kettlebellkings.com/cdn/shop/articles/barbell-deadlift-movement.gif?v=1692228918&width=1000",
        },
        {
            id: "beginners",
            name: "Lunges",
            need: "Lunges work the muscles in the legs, including the quadriceps and glutes.",
            suitable: "For individuals of all fitness levels",
            benefits: ["Leg Strength", "Improved Balance", "Single-Leg Stability"],
            procedure: [
                "1. Stand with feet together and take a step forward with one leg.",
                "2. Lower your body until both knees are bent at a 90-degree angle.",
                "3. Push back up to the starting position and repeat on the other leg."
            ],
            sets: "3 sets of 12 reps per leg",
            img: "https://www.athleticinsight.com/wp-content/uploads/2022/09/Lunges-02.jpg",
        },
        {
            id: "beginners",
            name: "Pull-ups",
            need: "Pull-ups target the muscles in the upper back, including the latissimus dorsi.",
            suitable: "For intermediate to advanced fitness levels",
            benefits: ["Upper Body Strength", "Improved Grip Strength", "Muscular Endurance"],
            procedure: [
                "1. Hang from a pull-up bar with palms facing away and hands shoulder-width apart.",
                "2. Pull your body up until your chin is above the bar.",
                "3. Lower your body back down with control."
            ],
            sets: "3 sets of 8 reps",
            img: "https://anabolicaliens.com/cdn/shop/articles/199990_400x.png?v=1645089103"
        },
        {
            id: "beginners",
            name: "Burpees",
            need: "Burpees are a full-body exercise that combines strength and cardiovascular elements.",
            suitable: "For individuals of all fitness levels",
            benefits: ["Cardiovascular Conditioning", "Full Body Engagement", "Calorie Burning"],
            procedure: [
                "1. Start in a standing position.",
                "2. Drop into a squat position and place your hands on the ground.",
                "3. Jump your feet back, landing in a plank position.",
                "4. Perform a push-up, then jump your feet back towards your hands.",
                "5. Explosively jump up, reaching for the sky."
            ],
            sets: "3 sets of 10 reps",
            img: "https://whatsupmag.com/downloads/65289/download/fitness1.jpg?cb=b6bfba2be144bb527a222ba66ffd8ee7&w=660&h=",
        },
        {
            id: "intermediate",
            name: "Renegade Rows",
            need: "Renegade rows target the back, shoulders, and core.",
            suitable: "For intermediate fitness levels",
            benefits: ["Upper Body Strength", "Core Stability", "Improved Shoulder Function"],
            procedure: [
                "1. Start in a plank position with a dumbbell in each hand.",
                "2. Perform a row with one arm, keeping the hips stable.",
                "3. Alternate rows while maintaining a plank position."
            ],
            sets: "3 sets of 12 reps per arm",
            img: "https://experiencelife.lifetime.life/wp-content/uploads/2020/09/renegade-row-card-1024x577.jpg"
        },
        {
            id: "intermediate",
            name: "Box Jumps",
            need: "Box jumps are a plyometric exercise that works on explosive power.",
            suitable: "For intermediate fitness levels",
            benefits: ["Lower Body Power", "Cardiovascular Conditioning", "Improved Athletic Performance"],
            procedure: [
                "1. Stand in front of a sturdy box or platform.",
                "2. Jump onto the box, landing softly with knees slightly bent.",
                "3. Step back down and repeat."
            ],
            sets: "3 sets of 10 reps",
            img: "https://movemoresitless.files.wordpress.com/2013/03/screen-shot-2013-03-23-at-7-02-06-pm.png"
        },
        {
            id: "intermediate",
            name: "Tricep Dips",
            need: "Tricep dips target the triceps and shoulders.",
            suitable: "For intermediate fitness levels",
            benefits: ["Tricep Development", "Shoulder Stability", "Improves Pushing Strength"],
            procedure: [
                "1. Sit on the edge of a bench or chair with hands placed next to hips.",
                "2. Slide off the bench and lower your body by bending the elbows.",
                "3. Push back up to the starting position."
            ],
            sets: "3 sets of 15 reps",
            img: "https://qph.cf2.quoracdn.net/main-qimg-cf2058c891a58de973cc146af500a09e-lq"
        },
        {
            id: "intermediate",
            name: "Kettlebell Swings",
            need: "Kettlebell swings work the posterior chain and cardiovascular system.",
            suitable: "For intermediate fitness levels",
            benefits: ["Hip Power", "Cardiovascular Conditioning", "Full Body Engagement"],
            procedure: [
                "1. Stand with feet shoulder-width apart, holding a kettlebell with both hands.",
                "2. Hinge at the hips and swing the kettlebell between the legs.",
                "3. Swing the kettlebell to chest height using hip power."
            ],
            sets: "3 sets of 15 reps",
            img: "https://epicself.com/wp-content/uploads/2016/02/kettlebell-swing.png-e1456347095756.jpg"
        },
        {
            id: "intermediate",
            name: "Hanging Leg Raises",
            need: "Hanging leg raises target the lower abs and hip flexors.",
            suitable: "For intermediate fitness levels",
            benefits: ["Core Strength", "Lower Ab Development", "Improved Hip Flexor Flexibility"],
            procedure: [
                "1. Hang from a pull-up bar with arms extended.",
                "2. Lift your legs towards the ceiling while keeping them straight.",
                "3. Lower your legs back down with control."
            ],
            sets: "3 sets of 12 reps",
            img: "https://www.inspireusafoundation.org/wp-content/uploads/2022/06/hanging-leg-raise-movement.gif"
        },
        {
            id: "expert",
            name: "Muscle-ups",
            need: "Muscle-ups combine a pull-up and a dip, targeting the upper body.",
            suitable: "For advanced fitness levels",
            benefits: ["Upper Body Strength", "Advanced Calisthenics", "Muscular Control"],
            procedure: [
                "1. Start with a hanging position on a pull-up bar.",
                "2. Perform a pull-up, then transition into a dip.",
                "3. Lower yourself back down with control."
            ],
            sets: "3 sets of 5 reps",
            img: "https://i0.wp.com/workoutlabs.com/wp-content/uploads/watermarked/Muscle_Up.png?w=1360"
        },
        {
            id: "expert",
            name: "Pistol Squats",
            need: "Pistol squats are a challenging single-leg exercise.",
            suitable: "For advanced fitness levels",
            benefits: ["Leg Strength", "Balance and Stability", "Unilateral Leg Development"],
            procedure: [
                "1. Stand on one leg with the other leg extended in front.",
                "2. Lower your body into a squat position on one leg.",
                "3. Push back up to the starting position."
            ],
            sets: "3 sets of 8 reps per leg",
            img: "https://muscu-street-et-crossfit.fr/wp-content/uploads/2023/02/Muscles-pistols-squats.001-980x551.jpeg"
        },
        {
            id: "expert",
            name: "Handstand Push-ups",
            need: "Handstand push-ups target the shoulders and triceps.",
            suitable: "For advanced fitness levels",
            benefits: ["Shoulder Strength", "Upper Body Control", "Progressive Calisthenics"],
            procedure: [
                "1. Start in a handstand against a wall.",
                "2. Lower your head towards the ground by bending your elbows.",
                "3. Push back up to the starting position."
            ],
            sets: "3 sets of 8 reps",
            img: "https://www.inspireusafoundation.org/wp-content/uploads/2023/02/handstand-pushup.gif"
        },
        {
            id: "expert",
            name: "Dragon Flags",
            need: "Dragon flags work the entire core, especially the lower abs.",
            suitable: "For advanced fitness levels",
            benefits: ["Core Strength", "Abdominal Endurance", "Advanced Calisthenics"],
            procedure: [
                "1. Lie on your back and hold onto a sturdy surface above your head.",
                "2. Lift your legs and lower back off the ground, keeping your body straight.",
                "3. Lower your legs back down without touching the ground."
            ],
            sets: "3 sets of 10 reps",
            img: "https://fitnessprogramer.com/wp-content/uploads/2022/07/Leg-Raise-Dragon-Flag.gif"
        },
        {
            id: "expert",
            name: "Ring Muscle-ups",
            need: "Ring muscle-ups add an extra challenge to the standard muscle-up.",
            suitable: "For advanced fitness levels",
            benefits: ["Upper Body Strength", "Gymnastic Skill", "Full Body Coordination"],
            procedure: [
                "1. Perform a muscle-up on gymnastic rings.",
                "2. Control the rings and transition between the pull-up and dip phases.",
                "3. Lower yourself back down with control."
            ],
            sets: "3 sets of 5 reps",
            img: "https://www.inspireusafoundation.org/wp-content/uploads/2023/04/ring-dip.gif"
        },  
];
