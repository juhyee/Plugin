
https://nooroong.com/contact.html 
            $(function() {
                $('.port-list').each(function() {
                    // 1. 준비
                    var $container = $(this),
                        $loadMoreButton = $('#load-more'),
                        $filter = $('.filter-button-group'),
                        addItemCount = 6,
                        addedd = 0,
                        allData = [],
                        filteredData = [];
                    //이미지 사이즈 세팅
                    $container.isotope({
                        itemSelector: '.port-item',
                        masonry:{
                            columnWidth: '.grid__col-sizer',
                            gutter: '.grid__gutter-sizer'
                        }
                    });

                    // 2. JSON 가져오기
                    $.getJSON('/assets/data/content.json', initGallery);

                    // 3. 갤러리 초기화
                    function initGallery(data) {
                        allData = data;
                        filteredData = allData;
                        addItems();
                        $loadMoreButton.on('click', addItems);
                        $filter.on('click', 'button', filterItems);
                    }

                    // 4. 항목을 생성하고 문서에 삽입
                    function addItems(filter) {
                        var elements = [],
                        slicedData = filteredData.slice(addedd, addedd + addItemCount);
                        $.each(slicedData, function(i, item) {
                            if(item.hasOwnProperty('link')){
                                var itemHTML =
                                '<div class="port-item ' + item.filter + '">' +
                                    '<a href="' + item.link + '" target="_blank">' +
                                        '<div class="img-wrap">' +
                                            '<img src="' + item.img.src + '" alt="' + item.img.alt + '">' +
                                        '</div>' +
                                        '<p class="category">' + item.tag + '</p>' +
                                        '<p class="title">' + item.title + '</p>' +
                                        '<p class="term">' + item.term + '</p>' +
                                    '</a>' +
                                '</div>';
                            } else {
                                var itemHTML =
                                '<div class="port-item ' + item.filter + '">' +
                                    '<div class="img-wrap">' +
                                        '<img src="' + item.img.src + '" alt="' + item.img.alt + '">' +
                                    '</div>' +
                                    '<p class="category">' + item.tag + '</p>' +
                                    '<p class="title">' + item.title + '</p>' +
                                    '<p class="term">' + item.term + '</p>' +
                                '</div>';
                            }
                            elements.push($(itemHTML).get(0));
                        });

                        // isotope 실행
                        $container
                        .append(elements)
                        .imagesLoaded(function() {
                            $(elements).removeClass('is-loading');
                            $container.isotope('appended', elements);

                            if (filter) {
                                $container.isotope();
                            }
                        });

                        addedd += slicedData.length;
                        if (addedd < filteredData.length) {
                            $loadMoreButton.show();
                            $('#no-more').hide();
                        } else {
                            $loadMoreButton.hide();
                            $('#no-more').show();
                        }
                    }

                    // 5. 항목 필터링
                    function filterItems() {
                        var key = $(this).val(),
                        masonryItems = $container.isotope('getItemElements');
                        $(this).addClass("on").siblings().removeClass("on");
                        $container.isotope('remove', masonryItems);
                        filteredData = [];
                        addedd = 0;

                        if (key === 'all') {
                            filteredData = allData;
                        } else {
                            filteredData = $.grep(allData, function(item) {
                                return item.filter.indexOf(key) != -1;
                            });
                        }
                        addItems(true);
                    }
                });
            });
        