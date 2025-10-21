let isPremium = false;
const FREE_PLAN_LIMIT = 2;
const VALID_CODES = ['ECOPREMIUM2025', 'GREENFUTURE', 'SUSTAINABLE', 'PLANETLOVE'];

const database = {
    'plastic bottle': [
        { 
            name: 'Stainless Steel Water Bottle', 
            description: 'Durable, reusable bottle that lasts for years. No chemicals leaching, keeps drinks cold/hot for hours.', 
            metrics: { carbon: 9.2, water: 8.1, cycle: 10 }, 
            link: '#',
            tldr: 'Excellent durability and reusability make this a top-tier alternative. Perfect for daily use with minimal environmental impact.',
            report: 'Stainless steel bottles have an exceptionally long lifespan, often lasting 10+ years with proper care. The manufacturing process is energy-intensive initially, but this is offset by thousands of uses. These bottles are 100% recyclable at end-of-life, though their durability means they rarely need replacement. The insulation properties reduce the need for single-use cups when buying hot/cold drinks.'
        },
        { 
            name: 'Glass Water Bottle', 
            description: 'Pure taste, eco-friendly, and infinitely recyclable. Great for home and office use.', 
            metrics: { carbon: 8.5, water: 7.6, cycle: 10 }, 
            link: '#',
            tldr: 'Provides the purest drinking experience with complete recyclability, though requires careful handling.',
            report: 'Glass offers the advantage of being completely inert, meaning no chemical leaching into your water. It is infinitely recyclable without loss of quality. The main environmental cost comes from the high-temperature manufacturing process. While fragile, modern glass bottles often come with protective silicone sleeves. Glass production has become more efficient, with many manufacturers using cullet (recycled glass) to reduce energy consumption by up to 30%.'
        },
        { 
            name: 'Filtered Tap Water System', 
            description: 'Install at home to eliminate plastic bottle waste entirely. Most sustainable long-term solution.', 
            metrics: { carbon: 10, water: 9.8, cycle: 9.5 }, 
            link: '#',
            tldr: 'The ultimate solution for eliminating single-use plastic bottles with minimal long-term environmental impact.',
            report: 'Home filtration systems represent the pinnacle of sustainable hydration. After the initial manufacturing impact, the ongoing environmental cost is minimal. Modern systems can filter thousands of gallons before needing replacement, dramatically reducing plastic waste. Many municipalities have excellent tap water quality, making filtration primarily for taste preference. The carbon footprint is spread across thousands of uses, making it the most efficient option per liter of water consumed.'
        },
        { 
            name: 'Recycled Aluminum Bottle', 
            description: 'Lightweight and durable, made from 100% recycled content. Highly carbon-efficient production.', 
            metrics: { carbon: 9.7, water: 8.8, cycle: 10 }, 
            link: '#',
            tldr: 'Top-tier carbon score due to 100% post-consumer recycled input. Excellent durability and infinite recyclability.',
            report: 'The manufacturing process for recycled aluminum uses 95% less energy than producing virgin aluminum, translating to its near-perfect carbon score. Water use is limited to closed-loop cooling systems. The bottle is coated with a non-toxic food-grade liner, ensuring purity and long-term reuse. This is currently the most sustainable portable option available, combining lightweight portability with exceptional environmental credentials.'
        }
    ],
    'shampoo bottle': [
        { 
            name: 'Shampoo Bar', 
            description: 'Solid bars that eliminate the need for a plastic bottle. Concentrated and long-lasting.', 
            metrics: { carbon: 10, water: 9.5, cycle: 10 }, 
            link: '#',
            tldr: 'Eliminates plastic packaging entirely while being highly concentrated and long-lasting.',
            report: 'Shampoo bars represent a fundamental shift from liquid to solid personal care products. They typically last 2-3 times longer than equivalent liquid shampoos, reducing both packaging and product waste. Most are packaged in minimal paper or cardboard. The manufacturing process requires less energy as no water needs to be heated or transported. Many brands use natural ingredients that are biodegradable and less taxing on water treatment systems.'
        },
        { 
            name: 'Refillable Aluminum Bottle', 
            description: 'Purchase a durable bottle once and refill it at participating stores or via mail-in pouches.', 
            metrics: { carbon: 8.5, water: 8.0, cycle: 9.0 }, 
            link: '#',
            tldr: 'Durable container system that dramatically reduces single-use plastic through refill models.',
            report: 'Refill systems leverage the environmental advantage of durable packaging. The aluminum bottle can be reused hundreds of times, while refills come in lightweight, recyclable pouches that use up to 80% less plastic than conventional bottles. Many refill programs use concentrated formulas, further reducing transportation impacts. This model supports a circular economy where packaging is valued as a durable asset rather than disposable waste.'
        },
        { 
            name: 'Powdered Shampoo', 
            description: 'Just add water to create a lather. Shipped in compostable paper packaging, drastically reducing waste.', 
            metrics: { carbon: 9.8, water: 9.9, cycle: 9.5 }, 
            link: '#',
            tldr: 'Almost perfect scores due to minimal packaging and no water being shipped, which reduces transport emissions.',
            report: 'Powder-to-liquid formulas are a highly efficient way to distribute products. They eliminate shipping water, which is the heaviest component of traditional shampoos. This reduces transportation emissions by up to 80%. The compact powder format allows for minimal packaging, often just a small compostable pouch. When activated with water, these products create a rich lather comparable to conventional shampoos. The manufacturing process is less energy-intensive as it avoids heating and preserving liquid formulations.'
        }
    ],
    'coffee cup': [
        { 
            name: 'Reusable Ceramic Mug', 
            description: 'The classic, zero-waste option for home or office. Lasts forever with proper care.', 
            metrics: { carbon: 10, water: 9.0, cycle: 10 }, 
            link: '#',
            tldr: 'The most sustainable option for stationary use with virtually unlimited lifespan.',
            report: 'Ceramic mugs represent the gold standard for reusable drinkware in fixed locations. Their durability is exceptional - a well-made ceramic mug can last decades or even generations. The material is inert and doesn\'t affect beverage taste. While the initial manufacturing is energy-intensive due to kiln firing, this impact is amortized over thousands of uses. Ceramic is fully recyclable, though its longevity means recycling is rarely necessary. For office or home use, nothing beats ceramic for sustainability.'
        },
        { 
            name: 'Insulated Travel Mug', 
            description: 'Keeps coffee hot for hours, perfect for commutes. Reduces daily waste from disposable cups.', 
            metrics: { carbon: 9.5, water: 8.5, cycle: 10 }, 
            link: '#',
            tldr: 'Ideal for on-the-go use while eliminating daily disposable cup waste.',
            report: 'Insulated travel mugs serve a specific purpose that ceramic cannot - portable thermal retention. Most quality models will keep beverages hot for 4-6 hours, eliminating the need for disposable cups during commutes or travel. The stainless steel construction is durable and fully recyclable. Many coffee shops offer discounts for bringing your own mug, creating both environmental and economic incentives. A single travel mug can prevent hundreds of disposable cups from entering landfills each year.'
        },
        { 
            name: 'Silicone Collapsible Cup', 
            description: 'Extremely portable and lightweight. Made from food-grade silicone, a durable and reusable material.', 
            metrics: { carbon: 8.0, water: 7.0, cycle: 8.5 }, 
            link: '#',
            tldr: 'Excellent for travel due to its collapsibility. Silicone is durable and a better alternative to plastic.',
            report: 'Collapsible silicone cups solve the portability problem of traditional reusable cups. Their compact form when collapsed makes them ideal for travel, hiking, or keeping in a bag for unexpected use. Food-grade silicone is durable, flexible, and doesn\'t leach chemicals. While silicone manufacturing is less energy-intensive than metals, recycling options are more limited and specialized. These cups represent a good balance between convenience and sustainability for mobile lifestyles.'
        }
    ],
    'cotton shirt': [
        { 
            name: 'Organic Cotton Shirt', 
            description: 'Grown without pesticides, reducing soil and water contamination. Uses less water than conventional cotton.', 
            metrics: { carbon: 8.0, water: 7.5, cycle: 8.0 }, 
            link: '#',
            tldr: 'Significantly reduces agricultural chemical use while maintaining cotton\'s desirable properties.',
            report: 'Organic cotton represents a major improvement over conventional cotton farming. It eliminates synthetic pesticides and fertilizers that contaminate soil and waterways. Organic practices typically use 91% less water than conventional cotton farming by focusing on rain-fed agriculture and soil health. While the yield is lower, the environmental benefits are substantial. Organic cotton farming also promotes biodiversity and soil carbon sequestration. The fabric maintains all the comfort and breathability of conventional cotton without the chemical footprint.'
        },
        { 
            name: 'Linen Shirt', 
            description: 'Made from the flax plant, which requires minimal water and pesticides. Highly breathable and biodegradable.', 
            metrics: { carbon: 9.0, water: 9.2, cycle: 9.5 }, 
            link: '#',
            tldr: 'Exceptionally sustainable fabric from a low-impact crop with excellent biodegradability.',
            report: 'Linen, derived from the flax plant, is one of the most environmentally friendly textiles available. Flax requires minimal water compared to cotton and grows well in poor soils without synthetic inputs. The entire plant is used in production, minimizing waste. Linen fabric is exceptionally durable and becomes softer with each wash. It is completely biodegradable at end-of-life. The natural texture and breathability make it ideal for warm weather. Linen production has a long history of sustainability, with modern methods further reducing environmental impact.'
        },
        { 
            name: 'Hemp Fabric Shirt', 
            description: 'A highly sustainable crop that requires very little water and no pesticides. Durable and softens with age.', 
            metrics: { carbon: 9.5, water: 9.8, cycle: 9.0 }, 
            link: '#',
            tldr: 'One of the most eco-friendly fabrics available. Hemp regenerates soil and is naturally pest-resistant.',
            report: 'Hemp is arguably the most sustainable textile crop available. It grows densely, suppressing weeds naturally without herbicides. Hemp cultivation actually improves soil health through deep root systems that prevent erosion and add organic matter. The plant is naturally pest-resistant, eliminating the need for pesticides. Hemp requires about 50% less water per season than cotton. The resulting fabric is exceptionally strong, antimicrobial, and becomes softer with each wash. Hemp cultivation is carbon-negative, as the plants absorb more CO2 than is emitted during processing.'
        }
    ],
    'plastic bag': [
        { 
            name: 'Reusable Canvas Tote Bag', 
            description: 'The classic grocery-getter. Durable, washable, and can be used thousands of times.', 
            metrics: { carbon: 9.5, water: 8.0, cycle: 10 }, 
            link: '#',
            tldr: 'The workhorse of reusable bags with exceptional durability and simple end-of-life recycling.',
            report: 'Canvas tote bags represent the most reliable reusable bag option. Made from natural cotton fibers, they are incredibly durable and can withstand years of heavy use. The simple manufacturing process has relatively low environmental impact compared to synthetic alternatives. Canvas bags are completely biodegradable at end-of-life, though their longevity means this is rarely necessary. They can be washed repeatedly without degradation. Studies show that a canvas bag needs to be used approximately 130 times to offset its higher initial environmental impact compared to single-use plastic bags - a threshold easily exceeded with regular use.'
        },
        { 
            name: 'Foldable Polyester Bag', 
            description: 'Extremely compact and lightweight, perfect for keeping in a purse or car for unexpected trips.', 
            metrics: { carbon: 8.5, water: 9.0, cycle: 9.0 }, 
            link: '#',
            tldr: 'Ultra-portable solution that ensures you always have a reusable bag available.',
            report: 'Foldable polyester bags solve the "I forgot my bag" problem that plagues reusable bag adoption. Their compact size when folded means they can be carried everywhere, ensuring availability for unplanned purchases. While made from synthetic materials, their ultra-lightweight construction means minimal material use per bag. Most are made from recycled PET bottles, diverting plastic from landfills. The key to their sustainability is frequent use - studies show these bags need to be used only 10-20 times to break even with single-use plastic bags environmentally.'
        },
        { 
            name: 'String Net Bag', 
            description: 'Lightweight, expandable, and great for carrying produce as it allows it to breathe.', 
            metrics: { carbon: 9.2, water: 8.8, cycle: 10 }, 
            link: '#',
            tldr: 'Ideal for produce shopping with excellent airflow and minimal material use.',
            report: 'String net bags, often called "mesh bags," are particularly suited for produce shopping. Their open weave allows fruits and vegetables to breathe, reducing spoilage compared to plastic bags. The minimal material use makes them extremely lightweight with low manufacturing impacts. Most are made from cotton or other natural fibers and are fully biodegradable. They are particularly useful for avoiding the thin plastic produce bags ubiquitous in supermarkets. The expandable nature means one size can accommodate varying shopping loads, reducing the need for multiple bags.'
        }
    ],
    'toothbrush': [
        { 
            name: 'Bamboo Toothbrush', 
            description: 'A handle made from compostable bamboo with recyclable nylon bristles. A huge improvement over all-plastic brushes.', 
            metrics: { carbon: 9.5, water: 9.0, cycle: 8.5 }, 
            link: '#',
            tldr: 'Significantly reduces plastic waste with a compostable handle and reduced manufacturing impact.',
            report: 'Bamboo toothbrushes represent a substantial improvement over conventional plastic models. The bamboo handle is compostable in industrial facilities or can be home-composted if the bristles are removed. Bamboo is a rapidly renewable resource that requires no pesticides or fertilizers and grows with minimal water. Most brands use nylon bristles which, while not biodegradable, represent a tiny fraction of the brush\'s mass compared to plastic handles. The manufacturing process for bamboo brushes typically uses less energy than plastic injection molding. When disposed of properly, over 90% of the brush returns to the earth.'
        },
        { 
            name: 'Recycled Plastic Toothbrush', 
            description: 'Made from recycled materials like yogurt cups, diverting plastic from landfills.', 
            metrics: { carbon: 8.0, water: 8.5, cycle: 7.5 }, 
            link: '#',
            tldr: 'Gives new life to existing plastic waste while maintaining familiar brushing experience.',
            report: 'Recycled plastic toothbrushes address the plastic waste problem by creating demand for post-consumer recycled materials. Most are made from polypropylene recycled from items like yogurt containers and bottle caps. This process diverts plastic from landfills and reduces the need for virgin plastic production. While still made of plastic, the environmental impact is significantly lower than virgin plastic brushes. The familiar feel and function make them an easy switch for those not ready for bamboo alternatives. Proper disposal through specialized recycling programs can keep the material in circulation.'
        },
        { 
            name: 'Replaceable Head Toothbrush', 
            description: 'Keep the durable handle (often aluminum or recycled plastic) and only replace the small head, reducing waste by up to 80%.', 
            metrics: { carbon: 9.8, water: 9.2, cycle: 9.5 }, 
            link: '#',
            tldr: 'The most sustainable option over the long term by drastically minimizing the waste generated with each replacement cycle.',
            report: 'Replaceable head toothbrushes represent the pinnacle of dental hygiene sustainability. By retaining a durable handle for years and only replacing the small brushing head, waste is reduced by up to 80% compared to conventional toothbrushes. High-quality handles are often made from aluminum or durable recycled plastics that can last a decade or more. The small replacement heads use minimal material while providing the same cleaning efficacy. This system also tends to be more cost-effective over time. Some models even offer different bristle types for various dental needs, all while maintaining the same sustainable handle.'
        }
    ]
};

window.onload = () => {
    if (localStorage.getItem('darkMode') === null) {
        localStorage.setItem('darkMode', 'true');
    }
    
    const savedPremium = localStorage.getItem('isPremium');
    if (savedPremium === 'true') {
        isPremium = true;
    } else {
        isPremium = false;
        localStorage.setItem('isPremium', 'false');
    }

    if (localStorage.getItem('darkMode') === 'true') {
        document.body.classList.add('dark-mode');
        document.querySelector('#mode-toggle i').classList.replace('fa-moon', 'fa-sun');
    }

    updateUIForPlan();
    
    const splashScreen = document.getElementById('splash-screen');
    const appContainer = document.getElementById('app-container');
    
    setTimeout(() => {
        splashScreen.style.opacity = '0';
        appContainer.style.opacity = '1';
        setTimeout(() => splashScreen.style.display = 'none', 500);
    }, 1000);
};

function updateUIForPlan() {
    const searchSubtitle = document.getElementById('search-subtitle');
    const freePlanBtn = document.getElementById('free-plan-btn');
    const premiumPlanBtn = document.getElementById('premium-plan-btn');
    const logo = document.querySelector('.logo');
    const splashLogo = document.querySelector('.splash-logo');
    
    if (isPremium) {
        searchSubtitle.textContent = 'Premium access is active: showing all results and in-depth reports.';
        freePlanBtn.textContent = 'Switch to Free';
        freePlanBtn.disabled = false;
        freePlanBtn.onclick = () => switchToFreePlan();
        premiumPlanBtn.textContent = 'Subscribed (Active)';
        premiumPlanBtn.disabled = true;
        
        logo.classList.add('premium');
        splashLogo.classList.add('premium');
    } else {
        searchSubtitle.textContent = `Search for any product to discover eco-friendly alternatives (showing ${FREE_PLAN_LIMIT} results).`;
        freePlanBtn.textContent = 'Current Plan';
        freePlanBtn.disabled = true;
        freePlanBtn.onclick = null;
        premiumPlanBtn.textContent = 'Subscribe Now';
        premiumPlanBtn.disabled = false;
        premiumPlanBtn.onclick = () => alert('Redirecting to payment page...');
        
        logo.classList.remove('premium');
        splashLogo.classList.remove('premium');
    }
}

function switchToFreePlan() {
    if (confirm('Are you sure you want to switch back to the Free Plan? You will lose access to premium features.')) {
        localStorage.setItem('isPremium', 'false');
        isPremium = false;
        updateUIForPlan();
        window.location.href = "index.html"
        if (document.getElementById('search-view').classList.contains('active')) {
            const query = document.getElementById('searchInput').value;
            if (query) searchProducts();
        }
    }
}

function toggleDarkMode() {
    const body = document.body;
    const icon = document.querySelector('#mode-toggle i');
    body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
        icon.classList.replace('fa-moon', 'fa-sun');
        localStorage.setItem('darkMode', 'true');
    } else {
        icon.classList.replace('fa-sun', 'fa-moon');
        localStorage.setItem('darkMode', 'false');
    }
}

function showView(viewId) {
    document.querySelectorAll('.view').forEach(view => view.classList.remove('active'));
    document.getElementById(`${viewId}-view`).classList.add('active');
    
    document.querySelectorAll('nav button').forEach(button => button.classList.remove('active'));
    document.getElementById(`nav-${viewId}`).classList.add('active');
}

function searchProducts() {
    const query = document.getElementById('searchInput').value.toLowerCase().trim();
    if (!query) return;
    showView('search');

    const resultKeys = Object.keys(database).filter(key => key.includes(query));
    let results = [];
    resultKeys.forEach(key => {
        results = results.concat(database[key]);
    });

    displayResults(results);
}

function displayResults(results) {
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = '';

    if (results.length === 0) {
        resultsContainer.innerHTML = `<div class="empty-state"><h3>No results found</h3><p>We couldn't find any sustainable alternatives for your search.</p></div>`;
        return;
    }

    const resultsToShow = isPremium ? results : results.slice(0, FREE_PLAN_LIMIT);
    
    resultsToShow.forEach((product, index) => {
        const { ratingClass, ratingText } = calculateRating(product.metrics);
        
        let reportHTML = '';
        if (isPremium) {
            reportHTML = `
                <div class="report-section">
                    <div class="tldr-summary"><i class="fas fa-file-alt"></i> TL;DR: ${product.tldr}</div>
                    <div class="report-content"><p>${product.report}</p></div>
                </div>
                <button class="btn-report-toggle" onclick="toggleReport(this)">
                    <span class="btn-text">Show Full Report</span> <i class="fas fa-chevron-down"></i>
                </button>
            `;
        } else {
            reportHTML = `
                <div class="premium-report-lock">
                    <div class="premium-overlay">
                        <i class="fas fa-lock"></i> Premium Report Locked
                    </div>
                    <div class="tldr-summary"><i class="fas fa-file-alt"></i> TL;DR: ${product.tldr}</div>
                    <p style="color: var(--color-text-secondary-light); margin-bottom: 15px;">Detailed environmental analysis and lifecycle assessment available with Premium.</p>
                    <button class="btn-primary" onclick="showView('plans')">Upgrade to Unlock</button>
                </div>
            `;
        }
        
        const isLocked = !isPremium && index >= FREE_PLAN_LIMIT;
        const lockOverlay = isLocked ? `
            <div class="premium-overlay">
                <i class="fas fa-lock"></i> Premium Feature
            </div>
        ` : '';

        const card = `
            <div class="result-card ${isLocked ? 'premium-lock' : ''}">
                ${lockOverlay}
                <div class="result-header">
                    <div><h3 class="result-title">${product.name}</h3></div>
                    <div class="rating-badge ${ratingClass}">${ratingText}</div>
                </div>
                <p class="result-description">${product.description}</p>
                ${reportHTML}
                <div class="metrics-grid">
                    <div class="metric metric-carbon"><span class="metric-value">${product.metrics.carbon}</span><div class="metric-label">Carbon Score</div><div class="metric-bar"><div class="metric-fill" style="width: ${product.metrics.carbon * 10}%;"></div></div></div>
                    <div class="metric metric-water"><span class="metric-value">${product.metrics.water}</span><div class="metric-label">Water Score</div><div class="metric-bar"><div class="metric-fill" style="width: ${product.metrics.water * 10}%;"></div></div></div>
                    <div class="metric metric-cycle"><span class="metric-value">${product.metrics.cycle}</span><div class="metric-label">Circularity</div><div class="metric-bar"><div class="metric-fill" style="width: ${product.metrics.cycle * 10}%;"></div></div></div>
                </div>
                <a href="${product.link}" target="_blank" class="link-btn">Learn More <i class="fas fa-external-link-alt"></i></a>
            </div>
        `;
        resultsContainer.innerHTML += card;
    });
    
    if (!isPremium && results.length > FREE_PLAN_LIMIT) {
        const remainingCount = results.length - FREE_PLAN_LIMIT;
        resultsContainer.innerHTML += `
            <div class="free-limit-card">
                <h3><i class="fas fa-lock"></i> You've reached the free limit.</h3>
                <p>Unlock ${remainingCount} more result(s) and get in-depth reports by upgrading to Premium.</p>
                <button class="btn-primary" onclick="showView('plans')">Upgrade to Premium</button>
            </div>
        `;
    }
}

function redeemCode() {
    const codeInput = document.getElementById('redeemCodeInput');
    const messageDiv = document.getElementById('redeem-message');
    const code = codeInput.value.trim().toUpperCase();

    if (!code) {
        messageDiv.textContent = "Please enter a code";
        messageDiv.style.color = "var(--color-accent-secondary)";
        return;
    }

    if (VALID_CODES.includes(code)) {
        localStorage.setItem('isPremium', 'true');
        isPremium = true;
        messageDiv.textContent = "✓ Success! Premium features have been unlocked!";
        messageDiv.style.color = "var(--color-metric-carbon)";
        codeInput.value = '';
        
        updateUIForPlan();
        window.location.href = "index.html"
        if (document.getElementById('search-view').classList.contains('active')) {
            const query = document.getElementById('searchInput').value;
            if (query) searchProducts();
        }
    } else {
        messageDiv.textContent = "Invalid code. Please try again.";
        messageDiv.style.color = "var(--color-accent-secondary)";
        codeInput.value = '';
    }
}

function toggleReport(button) {
    const reportContent = button.previousElementSibling.querySelector('.report-content');
    const icon = button.querySelector('i');
    const btnText = button.querySelector('.btn-text');

    if (reportContent.style.maxHeight) {
        reportContent.style.maxHeight = null;
        reportContent.style.opacity = '0';
        icon.classList.replace('fa-chevron-up', 'fa-chevron-down');
        btnText.textContent = 'Show Full Report';
    } else {
        reportContent.style.maxHeight = reportContent.scrollHeight + "px";
        reportContent.style.opacity = '1';
        icon.classList.replace('fa-chevron-down', 'fa-chevron-up');
        btnText.textContent = 'Hide Full Report';
    }
}

function calculateRating(metrics) {
    const avg = (metrics.carbon + metrics.water + metrics.cycle) / 3;
    if (avg >= 9.5) return { ratingClass: 'rating-A-plus', ratingText: 'A+' };
    if (avg >= 8.5) return { ratingClass: 'rating-A', ratingText: 'A' };
    if (avg >= 7.0) return { ratingClass: 'rating-B', ratingText: 'B' };
    if (avg >= 5.0) return { ratingClass: 'rating-C', ratingText: 'C' };
    return { ratingClass: 'rating-D', ratingText: 'D' };
}