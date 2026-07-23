$(document).ready(function () {
    //
    const $menuToggle = $('.menu-toggle');
    const $menuDrawer = $('.menu-drawer');
    const $menuDrawerClose = $('.menu-drawer-close');
    const $overlay = $('<div class="drawer-overlay"></div>').appendTo('body');

    $menuToggle.on('click', function () {
        $menuDrawer.addClass('open');
        $overlay.addClass('show');
        $('body').css('overflow', 'hidden');
    });

    $menuDrawerClose.add($overlay).on('click', function () {
        $menuDrawer.removeClass('open');
        $overlay.removeClass('show');
        $('body').css('overflow', '');
    });


    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 50) {
            $('.sub-header').addClass('scrolled');
        } else {
            $('.sub-header').removeClass('scrolled');
        }
    });

    //
    const assets = {
        black: {
            name: "Obsidian Black Metallic", label: "Obsidian Black", price: "INR 0", bg: "#080808",
            images: ["assets/images/g63-black.avif", "assets/images/g63-black-2.avif", "assets/images/g63-black-3.avif", "assets/images/g63-black-4.avif"]
        },
        grey: {
            name: "Selenite Grey Metallic", label: "Selenite Grey", price: "INR 15,00,000", bg: "#7a7d84",
            images: ["assets/images/g63-grey.avif", "assets/images/g63-grey-2.avif", "assets/images/g63-grey-3.avif", "assets/images/g63-grey-4.avif"]
        },
        sand: {
            name: "Desert Sand Non-Metallic", label: "Desert Sand", price: "INR 45,00,000", bg: "#c2b29c",
            images: ["assets/images/g63-sand.avif", "assets/images/g63-sand-2.avif", "assets/images/g63-sand-3.avif", "assets/images/g63-sand-4.avif"]
        },
        'magno-grey': {
            name: "Monza Grey Magno", label: "Monza Grey", price: "INR 55,00,000", bg: "#595856",
            images: ["assets/images/g63-magno-grey.avif", "assets/images/g63-magno-grey-2.avif", "assets/images/g63-magno-grey-3.avif", "assets/images/g63-magno-grey-4.avif"]
        },
        'silver-metallic': {
            name: "High-tech Silver Metallic", label: "High-tech Silver", price: "INR 12,00,000", bg: "#a1a6ab",
            images: ["assets/images/g63-silver-metallic.avif", "assets/images/g63-silver-metallic-2.avif", "assets/images/g63-silver-metallic-3.avif", "assets/images/g63-silver-metallic-4.avif"]
        },
        'vintage-blue': {
            name: "Vintage Blue Non-Metallic", label: "Vintage Blue", price: "INR 28,00,000", bg: "#8da6ba",
            images: ["assets/images/g63-vintage-blue.avif", "assets/images/g63-vintage-blue-2.avif", "assets/images/g63-vintage-blue-3.avif", "assets/images/g63-vintage-blue-4.avif"]
        },
        'white': {
            name: "White", label: "White", price: "INR 0", bg: "#FFFFFF", border: "1px solid #ccc",
            images: ["assets/images/g63-white.avif", "assets/images/g63-white-2.avif", "assets/images/g63-white-3.avif", "assets/images/g63-white-4.avif"]
        },
        'yellow': {
            name: "AMG Solarbeam Yellow", label: "Solarbeam Yellow", price: "INR 75,00,000", bg: "#f3c31e",
            images: ["assets/images/g63-yellow.avif", "assets/images/g63-yellow-2.avif", "assets/images/g63-yellow-3.avif", "assets/images/g63-yellow-4.avif"]
        },
        'orange': {
            name: "Orange Magno", label: "Orange Magno", price: "INR 85,00,000", bg: "#d53f1c",
            images: ["assets/images/g63-orange.avif", "assets/images/g63-orange-2.avif", "assets/images/g63-orange-3.avif", "assets/images/g63-orange-4.avif"]
        },
        'blue-metallic': {
            name: "Rubellite Red Metallic", label: "Rubellite Red", price: "INR 35,00,000", bg: "#523135",
            images: ["assets/images/g63-brown.avif", "assets/images/g63-brown-2.avif", "assets/images/g63-brown-3.avif", "assets/images/g63-brown-4.avif"]
        }
    };

    const interiorAssets = {
        'truffle-black': {
            title: "MANUFAKTUR", name: "leather truffle brown/black", price: "INR 25,00,000", bg: "#4a3225",
            images: ["assets/images/interior-truffle-1.avif", "assets/images/interior-truffle-2.webp", "assets/images/interior-truffle-3.avif", "assets/images/interior-truffle-4.avif"]
        },
        'black-saddle': {
            title: "MANUFAKTUR", name: "black with accent band in saddle brown", price: "INR 30,00,000", bg: "#000000",
            images: ["assets/images/interior-saddle-1.avif", "assets/images/interior-saddle-2.webp", "assets/images/interior-saddle-3.avif", "assets/images/interior-saddle-4.avif"]
        },
        'bengal-red': {
            title: "MANUFAKTUR", name: "Bengal red / black", price: "INR 45,00,000", bg: "#7a2228",
            images: ["assets/images/interior-red-1.webp", "assets/images/interior-red-2.webp", "assets/images/interior-red-3.avif", "assets/images/interior-red-4.webp"]
        },
        'macchiato-black': {
            title: "MANUFAKTUR", name: "leather macchiato beige/black", price: "INR 28,00,000", bg: "#c6b39d",
            images: ["assets/images/interior-macchiato-1.webp", "assets/images/interior-macchiato-2.webp", "assets/images/interior-macchiato-3.avif", "assets/images/interior-macchiato-4.avif"]
        },
        'sage-grey': {
            title: "MANUFAKTUR", name: "sage grey / black", price: "INR 35,00,000", bg: "#586260",
            images: ["assets/images/interior-sage-1.avif", "assets/images/interior-sage-2.webp", "assets/images/interior-sage-3.avif", "assets/images/interior-sage-4.avif"]
        },
        'red-pepper': {
            title: "MANUFAKTUR", name: "red pepper / black", price: "INR 50,00,000", bg: "#902825",
            images: ["assets/images/interior-pepper-1.webp", "assets/images/interior-pepper-2.webp", "assets/images/interior-pepper-3.webp", "assets/images/interior-pepper-4.webp"]
        }
    };

    //

    let currentTab = 'exterior';
    let currentInteriorKey = 'truffle-black';
    let currentCarouselIndex = 0;

    function renderExteriorSwatches() {
        const $swatchesList = $('#exteriorSwatches');
        $swatchesList.empty();
        let isFirst = true;
        Object.keys(assets).forEach(key => {
            if (key === 'orange' || key === 'blue-metallic') return;
            const item = assets[key];
            const borderStyle = item.border ? `border: ${item.border};` : '';
            const bgStyle = item.bg.startsWith('repeating') ? `background: ${item.bg};` : `background-color: ${item.bg};`;
            const $swatch = $(`
                <div class="swatch-pill ${isFirst ? 'active' : ''}" data-key="${key}">
                    <div class="swatch-circle" style="${bgStyle} ${borderStyle}"></div>
                    <span class="swatch-label">${item.label}</span>
                </div>
            `);
            $swatchesList.append($swatch);
            if (isFirst) {
                updateConfiguratorView();
                isFirst = false;
            }
        });
    }

    function renderInteriorSwatches() {
        const $list = $('.interior-list-container');
        $list.empty();
        let isFirst = true;
        Object.keys(interiorAssets).forEach(key => {
            const item = interiorAssets[key];
            const $block = $(`
                <div class="int-block ${isFirst ? 'active' : ''}" data-key="${key}">
                    <img src="${item.images[0]}" class="int-block-img" alt="${item.name}">
                    <div class="int-block-info">
                        <span class="int-block-title">${item.title}</span>
                        <span class="int-block-name">${item.name}</span>
                        <span class="int-block-price">${item.price}</span>
                    </div>
                </div>
            `);
            $list.append($block);
            if (isFirst) {
                currentInteriorKey = key;
                updateConfiguratorView();
                isFirst = false;
            }
        });
    }

    function calculateTotalPrice() {
        const activePaintKey = $('#exteriorSwatches .swatch-pill.active').data('key') || 'black';
        const selectedPaint = assets[activePaintKey];
        const selectedInterior = interiorAssets[currentInteriorKey];



        const paintPriceVal = selectedPaint ? parseInt(selectedPaint.price.replace(/[^0-9]/g, '')) || 0 : 0;
        const interiorPriceVal = selectedInterior ? parseInt(selectedInterior.price.replace(/[^0-9]/g, '')) || 0 : 0;
        const basePrice = 35000000;
        const totalPrice = basePrice + paintPriceVal + interiorPriceVal;
        console.log("Base:", basePrice);
        console.log("Paint:", paintPriceVal);
        console.log("Interior:", interiorPriceVal);
        console.log("Total:", totalPrice);
        $('#customizerPrice').text('INR ' + totalPrice.toLocaleString('en-IN') + '.00');
    }

    function updateConfiguratorView(direction) {
        let src = '';
        let name = '';
        if (currentTab === 'exterior') {
            const activePaintKey = $('#exteriorSwatches .swatch-pill.active').data('key') || 'black';
            const selectedPaint = assets[activePaintKey];
            src = selectedPaint.images[currentCarouselIndex];
            name = selectedPaint.name;
        } else {
            const selectedInterior = interiorAssets[currentInteriorKey];
            src = selectedInterior.images[currentCarouselIndex];
            name = selectedInterior.name;
        }

        const $img = $('#customizerCarImage');

        if (direction) {
            const outClass = direction === 'next' ? 'slide-out-left' : 'slide-out-right';
            const inClass = direction === 'next' ? 'slide-in-right' : 'slide-in-left';

            $img.removeClass('slide-out-left slide-out-right slide-in-left slide-in-right').addClass(outClass);
            setTimeout(() => {
                $img.attr('src', src);
                $('.color-name-display').text(name);
                calculateTotalPrice();
                $img.removeClass(outClass).addClass(inClass);
                setTimeout(() => {
                    $img.removeClass(inClass);
                }, 250);
            }, 200);
        } else {
            $img.addClass('changing');
            setTimeout(() => {
                $img.attr('src', src);
                $('.color-name-display').text(name);
                calculateTotalPrice();
                $img.removeClass('changing');
            }, 300);
        }
    }

    //

    $(document).on('click', '#exteriorSwatches .swatch-pill', function () {
        $('#exteriorSwatches .swatch-pill').removeClass('active');
        $(this).addClass('active');
        currentCarouselIndex = 0;
        updateConfiguratorView();
    });

    $(document).on('click', '.int-block', function () {
        $('.int-block').removeClass('active');
        $(this).addClass('active');
        currentInteriorKey = $(this).data('key');
        currentCarouselIndex = 0;
        updateConfiguratorView();
    });

    $('.tab-btn').on('click', function () {
        $('.tab-btn').removeClass('active');
        $(this).addClass('active');

        currentTab = $(this).data('tab');
        currentCarouselIndex = 0;
        if (currentTab === 'exterior') {
            $('#interiorSwatches').hide();
            $('#exteriorSwatchesContainer').show();
            $('#exteriorSwatches').css('display', 'grid');
            $('#exteriorSwatches .swatch-pill.active').click();
        } else {
            $('#exteriorSwatchesContainer').hide();
            $('#interiorSwatches').show();
            $('.int-block.active').click();
        }
    });

    $('#customizerPrevBtn').on('click', function () {
        const activeItem = currentTab === 'exterior' ? assets[$('#exteriorSwatches .swatch-pill.active').data('key') || 'black'] : interiorAssets[currentInteriorKey];
        currentCarouselIndex = (currentCarouselIndex - 1 + activeItem.images.length) % activeItem.images.length;
        updateConfiguratorView('prev');
    });

    $('#customizerNextBtn').on('click', function () {
        const activeItem = currentTab === 'exterior' ? assets[$('#exteriorSwatches .swatch-pill.active').data('key') || 'black'] : interiorAssets[currentInteriorKey];
        currentCarouselIndex = (currentCarouselIndex + 1) % activeItem.images.length;
        updateConfiguratorView('next');
    });

    if ($('#exteriorSwatches').length > 0) {
        renderExteriorSwatches();
        renderInteriorSwatches();

        $(document).on('show.bs.modal', '#inquiryModal', function () {
            const activePaintKey = $('#exteriorSwatches .swatch-pill.active').data('key') || 'black';
            const selectedPaint = assets[activePaintKey];
            const selectedInterior = interiorAssets[currentInteriorKey];

            $('#modalPaintColor').text(selectedPaint ? selectedPaint.label : 'Black');
            $('#modalInteriorColor').text(selectedInterior ? selectedInterior.name : 'Truffle Black');

            const paintPriceVal = selectedPaint ? parseInt(selectedPaint.price.replace(/[^0-9]/g, '')) || 0 : 0;
            const interiorPriceVal = selectedInterior ? parseInt(selectedInterior.price.replace(/[^0-9]/g, '')) || 0 : 0;
            const basePrice = 35000000;
            const totalPrice = basePrice + paintPriceVal + interiorPriceVal;

            $('#modalCarPrice').text('INR ' + totalPrice.toLocaleString('en-IN') + '.00');
        });


        $(document).on('click', '.spec-accordion-trigger', function () {
            const $item = $(this).closest('.spec-accordion-item');
            const $content = $item.find('.spec-accordion-content');
            const $icon = $(this).find('i');

            const isActive = $item.hasClass('active');


            $('.spec-accordion-item').removeClass('active');
            $('.spec-accordion-content').css('max-height', '0');
            $('.spec-accordion-trigger i').css('transform', 'rotate(0deg)');

            if (!isActive) {
                $item.addClass('active');
                $content.css('max-height', $content[0].scrollHeight + 'px');
                $icon.css('transform', 'rotate(180deg)');
            }
        });

        $('.spec-accordion-item').first().find('.spec-accordion-trigger').click();
    }
    //
    function renderHomepageSwatches() {
        const $swatchesList = $('#homepageSwatches');
        if ($swatchesList.length === 0) return;
        $swatchesList.empty();

        let isFirst = true;
        Object.keys(assets).forEach(key => {
            const item = assets[key];
            const isWhiteOrMulti = (key === 'white');
            const swatchBg = isWhiteOrMulti ? '#ffffff' : (item.bg.startsWith('repeating') ? '#fff' : item.bg);
            const borderStyle = isWhiteOrMulti ? 'border: 1px solid rgba(255,255,255,0.3);' : '';
            const $swatch = $(`
                <div class="swatch ${isFirst ? 'active' : ''}" data-key="${key}">
                    <div class="swatch-inner" style="background-color: ${swatchBg}; ${borderStyle}"></div>
                </div>
            `);
            $swatchesList.append($swatch);

            if (isFirst) {
                isFirst = false;
            }
        });
    }

    $(document).on('click', '#homepageSwatches .swatch', function () {
        if (typeof window.homepageExit360 === 'function') {
            window.homepageExit360();
        }
        $('#homepageSwatches .swatch').removeClass('active');
        $(this).addClass('active');

        const key = $(this).data('key');
        const item = assets[key];
        const $img = $('#homepageCarImage');
        $img.addClass('changing');
        setTimeout(() => {
            $img.attr('src', item.images[0]);
            $('.color-name-display').text("MANUFAKTUR " + item.label);
            $img.removeClass('changing');
        }, 300);
    });

    if ($('#homepageSwatches').length > 0) {
        renderHomepageSwatches();

//
        if ($('#btn360Toggle').length > 0) {
            const TOTAL_FRAMES = 72;
            const getFrameUrl = (num) => `assets/images_frame/${num}.png`;

            const $btnToggle = $('#btn360Toggle');
            const $container360 = $('.homepage-360-container');
            const $staticImg = $('#homepageCarImage');
            const $carImage = $('#carFrameImg');
            const $dragContainer = $('#carSequenceContainer');
            const $loaderOverlay = $('#loaderOverlay');
            const $loadingText = $('#loadingText');
            const $progressBarFill = $('#progressBarFill');

            let is360Active = false;
            let is360Preloaded = false;
            const frames = new Array(TOTAL_FRAMES + 1);
            let loadedCount = 0;
            let currentFrame = 1;
            let startX = 0;
            let isDragging = false;
            const sensitivity = 6;

            function preload360Frames() {
                if (is360Preloaded) return;
                $loaderOverlay.css({ 'display': 'flex', 'opacity': '1' });

                for (let i = 1; i <= TOTAL_FRAMES; i++) {
                    const img = new Image();
                    img.onload = function () {
                        loadedCount++;
                        const pct = Math.round((loadedCount / TOTAL_FRAMES) * 100);
                        if ($loadingText.length) $loadingText.text(`Loading 360° Studio (${pct}%)`);
                        if ($progressBarFill.length) $progressBarFill.css('width', `${pct}%`);

                        if (loadedCount >= TOTAL_FRAMES) {
                            is360Preloaded = true;
                            setTimeout(() => {
                                $loaderOverlay.animate({ opacity: 0 }, 400, function () {
                                    $(this).hide();
                                });
                            }, 200);
                        }
                    };
                    img.onerror = function () {
                        loadedCount++;
                        if (loadedCount >= TOTAL_FRAMES) {
                            is360Preloaded = true;
                            $loaderOverlay.hide();
                        }
                    };
                    img.src = getFrameUrl(i);
                    frames[i] = img;
                }
            }

            function updateFrame(newFrame) {
                newFrame = ((newFrame - 1) % TOTAL_FRAMES + TOTAL_FRAMES) % TOTAL_FRAMES + 1;
                if (newFrame !== currentFrame) {
                    currentFrame = newFrame;
                    if ($carImage.length && frames[currentFrame] && frames[currentFrame].complete) {
                        $carImage.attr('src', frames[currentFrame].src);
                    }
                }
            }

            function enter360Mode() {
                is360Active = true;
                $btnToggle.addClass('active').html('<i class="bi bi-x-lg"></i> Exit 360°');
                $staticImg.css({ 'opacity': '0', 'pointer-events': 'none' });
                $container360.fadeIn(300);

                $('#homepageSwatches').fadeOut(300);

                $('.color-name-display').text("MANUFAKTUR Obsidian Blue");

                $('#homepageSwatches .swatch').removeClass('active');
                $('#homepageSwatches .swatch[data-key="black"]').addClass('active');

                if (is360Preloaded) {
                    $loaderOverlay.hide();
                } else {
                    preload360Frames();
                }
            }

            function exit360Mode() {
                is360Active = false;
                $btnToggle.removeClass('active').html('<i class="bi bi-arrow-repeat"></i> 360° View');
                $container360.fadeOut(300, function () {
                    $staticImg.css({ 'opacity': '1', 'pointer-events': 'auto' });
                });

                $('#homepageSwatches').fadeIn(300);
            }

            $btnToggle.on('click', function (e) {
                e.preventDefault();
                if (is360Active) {
                    exit360Mode();
                } else {
                    enter360Mode();
                }
            });

            $staticImg.on('mousedown', function (e) {
                e.preventDefault();
                enter360Mode();
                isDragging = true;
                startX = e.clientX;
                $dragContainer.css('cursor', 'grabbing');
            });

            const staticImgEl = $staticImg[0];
            const dragContainerEl = $dragContainer[0];

            if (staticImgEl) {
                staticImgEl.addEventListener('touchstart', function (e) {
                    if (!e.touches || e.touches.length !== 1) return;
                    enter360Mode();
                    isDragging = true;
                    startX = e.touches[0].clientX;
                }, { passive: true });
            }

            $dragContainer.on('mousedown', function (e) {
                if (!is360Preloaded) return;
                isDragging = true;
                startX = e.clientX;
                $dragContainer.css('cursor', 'grabbing');
            });

            $(window).on('mousemove', function (e) {
                if (!isDragging) return;
                const deltaX = e.clientX - startX;
                if (Math.abs(deltaX) >= sensitivity) {
                    const frameSteps = Math.floor(deltaX / sensitivity);
                    updateFrame(currentFrame - frameSteps);
                    startX = e.clientX - (deltaX % sensitivity);
                }
            });

            $(window).on('mouseup', function () {
                if (isDragging) {
                    isDragging = false;
                    $dragContainer.css('cursor', 'grab');
                }
            });

            if (dragContainerEl) {
                dragContainerEl.addEventListener('touchstart', function (e) {
                    if (!is360Preloaded || !e.touches || e.touches.length !== 1) return;
                    isDragging = true;
                    startX = e.touches[0].clientX;
                }, { passive: true });
            }

            window.addEventListener('touchmove', function (e) {
                if (!isDragging || !e.touches || e.touches.length !== 1) return;
                const deltaX = e.touches[0].clientX - startX;
                if (Math.abs(deltaX) >= sensitivity) {
                    const frameSteps = Math.floor(deltaX / sensitivity);
                    updateFrame(currentFrame - frameSteps);
                    startX = e.touches[0].clientX - (deltaX % sensitivity);
                }
            }, { passive: true });

            window.addEventListener('touchend', function () {
                isDragging = false;
            });

            window.homepageExit360 = function () {
                if (is360Active) {
                    exit360Mode();
                }
            };
        }
    }

//

    $('.hero-model-btn').on('click', function () {
        $('.hero-model-btn').removeClass('active btn-light').addClass('btn-outline-light');
        $(this).addClass('active btn-light').removeClass('btn-outline-light');

        const model = $(this).data('model');
        if (model === 'g63') {
            $('.hero-title').text('Mercedes-AMG G 63');
            $('.hero-badge').text('The Legend Grows');
            $('.tech-val-hp').text('585 HP + 20 HP');
        } else {
            $('.hero-title').text('Mercedes G-Class AMG Line');
            $('.hero-badge').text('Iconic Styling');
            $('.tech-val-hp').text('450 HP + 20 HP');
        }
    });

    //
    const $track = $('.highlights-track');
    const $prevBtn = $('.slider-btn-prev');
    const $nextBtn = $('.slider-btn-next');
    let scrollPosition = 0;

    if ($track.length > 0) {
        const cardWidth = 480; // Card width + margins

        $nextBtn.on('click', function () {
            const trackWidth = $track.outerWidth();
            const viewWidth = $('.highlights-wrapper').width();
            const maxScroll = trackWidth - viewWidth;

            if (scrollPosition < maxScroll) {
                scrollPosition += cardWidth;
                if (scrollPosition > maxScroll) scrollPosition = maxScroll;
                $track.css('transform', `translateX(-${scrollPosition}px)`);
            }
        });

        $prevBtn.on('click', function () {
            if (scrollPosition > 0) {
                scrollPosition -= cardWidth;
                if (scrollPosition < 0) scrollPosition = 0;
                $track.css('transform', `translateX(-${scrollPosition}px)`);
            }
        });

        $(window).on('resize', function () {
            scrollPosition = 0;
            $track.css('transform', 'translateX(0)');
        });
    }

    //
    $('.validated-form').on('submit', function (e) {
        e.preventDefault();
        let isValid = true;
        const $form = $(this);

        $form.find('input[required], select[required]').each(function () {
            const $input = $(this);
            if (!$input.val() || $input.val().trim() === '') {
                $input.addClass('is-invalid');
                isValid = false;
            } else {
                $input.removeClass('is-invalid');
            }
        });

        const $email = $form.find('input[type="email"]');
        if ($email.length > 0 && $email.val()) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test($email.val())) {
                $email.addClass('is-invalid');
                isValid = false;
            } else {
                $email.removeClass('is-invalid');
            }
        }

        const $password = $form.find('input[type="password"]');
        if ($password.length > 0) {
            $password.each(function () {
                const $pwdInput = $(this);
                const pwdVal = $pwdInput.val() ? $pwdInput.val() : '';
                const hasUppercase = /[A-Z]/.test(pwdVal);
                const hasNumber = /[0-9]/.test(pwdVal);
                const hasSymbol = /[!@#$%^&*()_+=\[\]{};':"\\|,.<>\/?~`\-]/.test(pwdVal);
                const hasMoreThan8 = pwdVal.length > 8;

                if (!hasMoreThan8 || !hasUppercase || !hasNumber || !hasSymbol) {
                    $pwdInput.addClass('is-invalid');
                    isValid = false;
                } else {
                    $pwdInput.removeClass('is-invalid');
                }
            });
        }

        $form.find('input[type="tel"]').each(function () {
            const $phoneInput = $(this);
            const phoneVal = $phoneInput.val() ? $phoneInput.val().trim() : '';
            const phoneRegex = /^[789]\d{9}$/;
            if (!phoneRegex.test(phoneVal)) {
                $phoneInput.addClass('is-invalid');
                isValid = false;
            } else {
                $phoneInput.removeClass('is-invalid');
            }
        });

        const $checkbox = $form.find('input[type="checkbox"][required]');
        if ($checkbox.length > 0) {
            if (!$checkbox.is(':checked')) {
                $checkbox.addClass('is-invalid');
                isValid = false;
            } else {
                $checkbox.removeClass('is-invalid');
            }
        }

        if (isValid) {
            const inquiryModalEl = document.getElementById('inquiryModal');
            if (inquiryModalEl) {
                const bootstrapModal = bootstrap.Modal.getInstance(inquiryModalEl);
                if (bootstrapModal) bootstrapModal.hide();
            }
            const authModalEl = document.getElementById('authModal');
            if (authModalEl) {
                const bootstrapModal = bootstrap.Modal.getInstance(authModalEl);
                if (bootstrapModal) bootstrapModal.hide();
            }
            showSuccessModal();
            $form[0].reset();
        }
    });

    function showSuccessModal() {
        const $modal = $('<div class="success-modal">' +
            '<div class="success-icon"><i class="bi bi-check-circle-fill">✓</i></div>' +
            '<div class="success-title">Thank You!</div>' +
            '<div class="success-desc">Your request has been successfully recorded. A Mercedes-Benz representative will contact you shortly.</div>' +
            '<button class="sub-header-btn sub-header-btn-solid modal-close-btn" style="width:100%;">Close Window</button>' +
            '</div>').appendTo('body');

        const $modalOverlay = $('<div class="drawer-overlay show" style="z-index: 2999;"></div>').appendTo('body');

        setTimeout(() => {
            $modal.addClass('show');
        }, 50);

        $modal.find('.modal-close-btn').add($modalOverlay).on('click', function () {
            $modal.removeClass('show');
            $modalOverlay.removeClass('show');
            setTimeout(() => {
                $modal.remove();
                $modalOverlay.remove();
            }, 300);
        });
    }

    $('.validated-form').find('input, select').on('input change', function () {
        if ($(this).val() && $(this).val().trim() !== '') {
            $(this).removeClass('is-invalid');
        }
    });
    //
    $('.brand-tab-btn').on('click', function () {
        $('.brand-tab-btn').removeClass('active');
        $(this).addClass('active');

        const filter = $(this).data('filter');
        const $cards = $('.model-card');

        if (filter === 'all') {
            $cards.fadeIn(300);
        } else {
            $cards.hide();
            $cards.filter(`[data-brand="${filter}"]`).fadeIn(300);
        }
    });

    $('.model-card').on('click', function () {
        $('.model-card').removeClass('active');
        $(this).addClass('active');

        const selectedModel = $(this).find('.model-card-title').text();
        $('#selectedModelField').val(selectedModel);
    });

    //
    const $loanRange = $('#loanRange');
    const $tenureRange = $('#tenureRange');
    const $loanValLabel = $('#loanVal');
    const $tenureValLabel = $('#tenureVal');

    if ($loanRange.length > 0) {
        function updateCalculations() {
            const loanAmount = parseInt($loanRange.val());
            const tenureMonths = parseInt($tenureRange.val());
            const annualInterestRate = 8.5; // Fixed 8.5% annual rate
            const monthlyInterestRate = (annualInterestRate / 12) / 100;

            // EMI Formula: P * r * (1+r)^n / ((1+r)^n - 1)
            let emi = 0;
            if (monthlyInterestRate > 0) {
                emi = (loanAmount * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, tenureMonths)) /
                    (Math.pow(1 + monthlyInterestRate, tenureMonths) - 1);
            } else {
                emi = loanAmount / tenureMonths;
            }

            const totalRepayment = emi * tenureMonths;
            const totalInterest = totalRepayment - loanAmount;
            const downPayment = loanAmount * 0.20; // 20% down payment

            $loanValLabel.text('₹ ' + (loanAmount / 100000).toFixed(1) + ' Lakh');
            $tenureValLabel.text(tenureMonths + ' Months');

            $('#emiResult').text('₹ ' + Math.round(emi).toLocaleString('en-IN'));
            $('#interestResult').text('₹ ' + Math.round(totalInterest).toLocaleString('en-IN'));
            $('#downPaymentResult').text('₹ ' + Math.round(downPayment).toLocaleString('en-IN'));
        }

        $loanRange.add($tenureRange).on('input', updateCalculations);
        updateCalculations();
    }

    function validateEmailVal(emailVal) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(emailVal);
    }

    function validatePasswordVal(pwdVal) {
        const hasUppercase = /[A-Z]/.test(pwdVal);
        const hasNumber = /[0-9]/.test(pwdVal);
        const hasSymbol = /[!@#$%^&*()_+=\[\]{};':"\\|,.<>\/?~`\-]/.test(pwdVal);
        const hasMoreThan8 = pwdVal.length > 8;
        return hasMoreThan8 && hasUppercase && hasNumber && hasSymbol;
    }

    function updateRealtimeFeedback($el, isValid) {
        if (isValid) {
            $el.addClass('is-valid').removeClass('is-invalid');
        } else {
            $el.addClass('is-invalid').removeClass('is-valid');
        }
    }

    $(document).on('input keyup change focus', '#signinEmail, #signupEmail', function () {
        const $el = $(this);
        updateRealtimeFeedback($el, validateEmailVal($el.val()));
    });

    $(document).on('input keyup change focus', '#signinPassword, #signupPassword', function () {
        const $el = $(this);
        updateRealtimeFeedback($el, validatePasswordVal($el.val()));
    });

    $(document).on('show.bs.modal hidden.bs.modal', '#authModal', function () {
        const $modal = $(this);
        $modal.find('form').each(function () {
            this.reset();
        });
        $modal.find('.form-control').removeClass('is-valid is-invalid');
    });
});
