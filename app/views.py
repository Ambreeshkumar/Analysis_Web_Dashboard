import json
from django.shortcuts import render
from .models import Data
from django.db.models import Avg, Max, Min, Count, Sum



def dashboard(request):
    # Get the top 5 sectors by count
    top_sectors = (Data.objects.values('sector').annotate(sector_count=Count('sector')).order_by('-sector_count')[:5])
    
    sectors = [entry['sector'] for entry in top_sectors]
    sector_counts = [entry['sector_count'] for entry in top_sectors]

    # Example data for region chart (you should replace this with your actual query)
    #regions = ['North', 'South', 'East', 'West']
    #region_counts = [10, 15, 7, 12]
    
    region_data = (Data.objects.values('region').annotate(region_count=Count('region')).order_by('-region_count')[:5])
    
    regions = [entry['region'] for entry in region_data]
    region_counts = [entry['region_count'] for entry in region_data]
    
    
     # Get countries with the count highest likelihood of events occurring
    country_likelihood = (Data.objects.values('country').annotate(avg_likelihood=Count('likelihood')).order_by('-avg_likelihood')[:5])
    
    countries = [entry['country'] for entry in country_likelihood]
    avg_likelihoods = [entry['avg_likelihood'] for entry in country_likelihood]
    
    context = {
        'total_entries': Data.objects.count(),
        'avg_intensity': Data.objects.aggregate(Avg('intensity'))['intensity__avg'],
        'max_intensity': Data.objects.aggregate(Max('intensity'))['intensity__max'],
        'min_intensity': Data.objects.aggregate(Min('intensity'))['intensity__min'],
        'high_intensity_count': Data.objects.filter(intensity__gt=50).count(),
        'common_sector': top_sectors[0],
        'sectors': json.dumps(sectors),
        'sector_counts': json.dumps(sector_counts),
        'regions': json.dumps(regions),
        'region_counts': json.dumps(region_counts),
        'countries': json.dumps(countries),
        'avg_likelihoods': json.dumps(avg_likelihoods),
        
    }
    return render(request, 'app/index.html', context)


# Analusis
def analysis_view(request):
    # Caclute the intensity of events vary over the years 
    intensity_over_years = Data.objects.values('start_year').annotate(total_intensity=Sum('intensity')).order_by('start_year')
    
    labels = [entry['start_year'] for entry in intensity_over_years]
    data = [entry['total_intensity'] for entry in intensity_over_years]
    
    
    # Queryset to get the average relevance of events over the years
    relevance_over_time = Data.objects.values('start_year').annotate(avg_relevance=Avg('relevance')).order_by('start_year')
    
    # Extract labels and data from the queryset
    relevance_labels = [entry['start_year'] for entry in relevance_over_time]
    relevance_data = [entry['avg_relevance'] for entry in relevance_over_time]
    
    # calculates the total intensity for each region,
    intensity_by_region = Data.objects.values('region').annotate(total_intensity=Sum('intensity')).order_by('region')
    
    intensity_labels = [entry['region'] for entry in intensity_by_region]
    intensity_data = [entry['total_intensity'] for entry in intensity_by_region]
    
    
    # Queryset to get regional breakdown of event impacts
    regional_impacts = Data.objects.values('region').annotate(total_impact=Sum('impact')).order_by('region')[:10]
    
    # Prepare data for JSON serialization
    regional_impacts_labels = [entry['region'] for entry in regional_impacts]
    regional_impacts_data = [entry['total_impact'] for entry in regional_impacts]
    
    context = {
        'intensity_labels': json.dumps(labels),
        'intensity_data': json.dumps(data),
        'relevance_labels': json.dumps(relevance_labels),
        'relevance_data': json.dumps(relevance_data),
        'intensity_Region_labels': json.dumps(intensity_labels),
        'intensity_Region_data': json.dumps(intensity_data),
        'regional_impacts_labels': json.dumps(regional_impacts_labels),
        'regional_impacts_data': json.dumps(regional_impacts_data),
    }
    
    return render(request, 'app/analysis.html', context)





#CRM:
def CRM_View(request):
     # Queryset to count the frequency of each topic
    topic_frequency = Data.objects.values('topic').annotate(frequency=Count('topic')).order_by('-frequency')[:10]
    
    #for entry in topic_frequency:
        #print(f"Topic: {entry['topic']}, Frequency: {entry['frequency']}")
    
    topic = [entry['topic'] for entry in topic_frequency]
    topic_count = [entry['frequency'] for entry in topic_frequency]
       
       
    # Aggregate the impact values by source
    impact_values = Data.objects.values('source').annotate(total_impact=Sum('impact')).order_by('-total_impact')[:5]
    data = list(impact_values)  # Convert QuerySet to list
    
    source = [entry['source'] for entry in impact_values]
    total_impact = [entry['total_impact'] for entry in impact_values]
    
    
    context = {
        'topic': json.dumps(topic),
        'topic_count': json.dumps(topic_count),
        'data_json' : json.dumps(data),
        'source': json.dumps(source),
        'total_impact': json.dumps(total_impact)
    
    }
    return render(request, 'app/CRM.html', context)



# Dataset Table.  
def Show_Database(request):
    data = Data.objects.all()
    return render(request, 'app/detaset_table.html',{'Data': data})